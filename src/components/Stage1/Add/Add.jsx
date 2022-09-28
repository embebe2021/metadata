import React from "react";
import { sendData } from "../../../ultils/callApi";
import { checkValidDate } from "../../../ultils/Validator";
import { connect } from "react-redux";
import { aUpdateDuAn } from "../../../store/importerMain";
import { aActionSetLoaded } from "../../../store/loader";
import draftStateList from "../../../store/draftStateList";
import LongInput from "../../ReUseComponents/LongInput/LongInput";
import LongTimeInput from "../../ReUseComponents/LongTimeInput/LongTimeInput";
import debounce from "./../../../ultils/debounce";
import localStorageCleaner from "./../../../ultils/localStorageCleaner";
import API from "./../../../ultils/API";
import Button from "./../../ReUseComponents/Button/Button";
import addStyle from "./Add.module.css";

const textInput = [
  {
    idTag: "tenDuAn",
    titles: "Tên dự án:",
    placeHolder: "ví dụ: Dự án TP 8 năm 2013, > 5 ký tự, < 255 ký tự",
  },
  {
    idTag: "vbplLienQuan",
    titles: "Những văn bản pháp lý liên quan:",
    placeHolder: "ví dụ: Quyết định 1811 ngày 18/09/2012, < 255 ký tự",
  },
];
const draft = [
  "tenDuAn",
  "vbplLienQuan",
  "stage1Ngay",
  "stage1Thang",
  "stage1Nam",
];
const defaultState = {
  textInput: {
    tenDuAn: "",
    vbplLienQuan: "",
  },
  dateInputValues: {
    Ngay: "",
    Thang: "",
    Nam: "",
  },
  isValidDate: null,
  isBtnActive: false,
  isBtnLoading: null,
  isDoubleProject: false,
};

const delayTime = 500;
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }
  checkValidDateInput = debounce(() => {
    let x = this.state.dateInputValues;
    this.setState((state) => ({
      ...state,
      isValidDate: checkValidDate(x.Ngay, x.Thang, x.Nam),
      isBtnLoading: true,
    }));
    this.delayCheckAllInput();
  }, delayTime / 2);
  delayCheckAllInput = debounce(() => {
    let x = this.state;
    if (
      x.textInput.tenDuAn.length > 5 &&
      x.dateInputValues.Ngay.length > 0 &&
      x.dateInputValues.Thang.length > 0 &&
      x.dateInputValues.Nam.length > 0 &&
      x.isValidDate === true
    ) {
      this.setState((state) => ({
        ...state,
        isBtnActive: true,
        isBtnLoading: false,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        isBtnActive: false,
        isBtnLoading: false,
      }));
    }
  }, delayTime);
  componentWillUnmount() {
    this.checkValidDateInput.cancel();
    this.delayCheckAllInput.cancel();
  }
  handleUpdateInput(value, idTag) {
    this.setState((state) => {
      return {
        ...state,
        textInput: {
          ...state.textInput,
          [idTag]: value,
        },
        isBtnLoading: true,
      };
    });
    this.delayCheckAllInput();
  }
  handleUpdateDate(value, type, obj) {
    if (obj === null) {
      this.setState((state) => {
        return {
          ...state,
          dateInputValues: {
            ...state.dateInputValues,
            [type]: value,
          },
          isBtnLoading: true,
        };
      });
    } else {
      this.setState((state) => ({
        ...state,
        dateInputValues: obj,
        isBtnLoading: true,
      }));
    }
    this.checkValidDateInput();
  }

  async handleClick() {
    const { textInput, dateInputValues, isBtnLoading } = this.state;
    const { ActionUpdateDuAn, ActionSetLoaded } = this.props;
    if (!isBtnLoading) {
      const payload = {
        tenDuAn: textInput.tenDuAn,
        vanBanPhapLyLienQuan: textInput.vbplLienQuan,
        thoiGianNop: {
          ngay: parseInt(dateInputValues.Ngay),
          thang: parseInt(dateInputValues.Thang),
          nam: parseInt(dateInputValues.Nam),
        },
      };
      try {
        let callApiResult = await sendData(API.duAn, payload);
        if (callApiResult.isCreated) {
          ActionSetLoaded();
          localStorage.setItem(
            draftStateList[0],
            JSON.stringify(callApiResult.item)
          );
          ActionUpdateDuAn(callApiResult.item);
          localStorageCleaner(draft);
          this.setState({ ...defaultState });
        }
        if (callApiResult.isDoubleProject) {
          ActionSetLoaded();
          this.setState((state) => ({
            ...state,
            isDoubleProject: true,
          }));
        }
      } catch (err) {
        return;
      }
    }
  }
  render() {
    return (
      <>
        <form
          className={addStyle["body-left-stage1-project__add"]}
          autoComplete="off"
        >
          <LongInput
            maxLength={100}
            idTag={textInput[0].idTag}
            mainTitle={textInput[0].titles}
            placeHolder={textInput[0].placeHolder}
            inputValue={this.state.textInput[textInput[0].idTag]}
            onUpdateInput={(value, idTag) =>
              this.handleUpdateInput(value, idTag)
            }
          ></LongInput>
          <LongInput
            maxLength={100}
            idTag={textInput[1].idTag}
            mainTitle={textInput[1].titles}
            placeHolder={textInput[1].placeHolder}
            inputValue={this.state.textInput[textInput[1].idTag]}
            onUpdateInput={(value, idTag) =>
              this.handleUpdateInput(value, idTag)
            }
          ></LongInput>
          <LongTimeInput
            idTag="stage1"
            mainTitle="Thời gian nộp:"
            dateInputValues={this.state.dateInputValues}
            isValidDate={this.state.isValidDate}
            onUpdateDate={(values, type, obj) =>
              this.handleUpdateDate(values, type, obj)
            }
          />
          <Button
            isPrimaryColor={true}
            mainTitle="Tạo dự án"
            icon="fa-solid fa-circle-check"
            isBtnActive={this.state.isBtnActive}
            isBtnLoading={this.state.isBtnLoading}
            onActive={() => this.handleClick()}
          />
        </form>
        {this.state.isDoubleProject ? (
          <span className={addStyle["body--input-date-status"]}>
            Tên dự án đã được tạo !
          </span>
        ) : null}
      </>
    );
  }
}

function mapStateToProps(fullState, ownProps) {
  return fullState;
}
function mapDispatchToProps(dispatch) {
  return {
    ActionUpdateDuAn: (payload) => dispatch(aUpdateDuAn(payload)),
    ActionSetLoaded: () => dispatch(aActionSetLoaded()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Add);
