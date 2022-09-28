import React from "react";
import debounce from "../../../ultils/debounce";
import localStorageCleaner from "../../../ultils/localStorageCleaner";
import { sendData } from "../../../ultils/callApi";
import API from "../../../ultils/API";
import Button from "../../ReUseComponents/Button/Button";
import { connect } from "react-redux";
import { aUpdateDonVi } from "../../../store/importerMain";
import { ValidateEmail } from "../../../ultils/Validator";
import { textFields, textDraft, defaultState } from "../textFields";
import { aActionSetLoaded } from "../../../store/loader";
import draftStateList from "../../../store/draftStateList";
import LongInput from "../../ReUseComponents/LongInput/LongInput";
import addStyle from "./Add.module.css";
const delayTime = 500;

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }
  checkValidEmail = debounce((input) => {
    this.setState((state) => ({
      ...state,
      isValidEmail: ValidateEmail(input),
    }));
    this.delayCheckAllInput();
  }, delayTime / 2);
  delayCheckAllInput = debounce(() => {
    let x = this.state;
    if (
      x.textInput.tenDonVi.length > 0 &&
      x.textInput.diaChi.length > 0 &&
      x.textInput.nguoiDaiDien.length > 0 &&
      x.textInput.chucVu.length > 0 &&
      x.textInput.soDienThoai.length > 0 &&
      x.textInput.email.length > 0 &&
      x.isValidEmail === true
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
    this.checkValidEmail.cancel();
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
    if (idTag === "email") {
      this.checkValidEmail(value);
    }
  }

  async handleClick() {
    const { isBtnLoading } = this.state;
    const { ActionLoaderOnClick, ActionSetLoaded, ActionUpdateDonVi } =
      this.props;
    if (!isBtnLoading) {
      let x = this.state.textInput;
      const payload = {
        tenDonVi: x.tenDonVi,
        diaChi: x.diaChi,
        nguoiDaiDien: x.nguoiDaiDien,
        chucVu: x.chucVu,
        soDienThoai: x.soDienThoai,
        email: x.email,
      };
      try {
        let callApiResult = await sendData(API.donVi, payload);
        if (callApiResult.isCreated) {
          localStorage.setItem(
            draftStateList[1],
            JSON.stringify(callApiResult.item)
          );
          ActionUpdateDonVi(callApiResult.item);
          localStorageCleaner(textDraft);
          this.setState({ ...defaultState });
        }
        if (callApiResult.isDoubleOrganization) {
          this.setState((state) => ({
            ...state,
            isDoubleOrganization: true,
          }));
        }
      } catch (err) {
        return;
      }
    }
  }
  render() {
    const { textInput, isBtnActive, isBtnLoading, isDoubleOrganization } =
      this.state;
    return (
      <>
        <form
          className={addStyle["body-left-stage2-organization__add"]}
          autoComplete="off"
        >
          {textFields.map((item, index) => (
            <LongInput
              key={index + "abc"}
              maxLength={item.maxLength}
              idTag={item.idTag}
              mainTitle={item.titles}
              placeHolder={item.placeHolder}
              inputValue={textInput[item.idTag]}
              onUpdateInput={(value, idTag) =>
                this.handleUpdateInput(value, idTag)
              }
            />
          ))}
          <Button
            isPrimaryColor={true}
            mainTitle="Tạo đơn vị"
            icon="fa-solid fa-circle-check"
            isBtnActive={isBtnActive}
            isBtnLoading={isBtnLoading}
            onActive={() => this.handleClick()}
          />
        </form>
        {isDoubleOrganization ? (
          <span className={addStyle["body--input-date-status"]}>
            Tên đơn vị đã tồn tại !
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
    ActionUpdateDonVi: (payload) => dispatch(aUpdateDonVi(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Add);
