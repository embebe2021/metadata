import React from "react";
import debounce from "../../../ultils/debounce";
import localStorageCleaner from "../../../ultils/localStorageCleaner";
import { sendData } from "../../../ultils/callApi";
import API from "../../../ultils/API";
import Button from "../../ReUseComponents/Button/Button";
import { connect } from "react-redux";
import {
  textFields,
  textDraft,
  defaultState,
  selectTitle,
} from "../textFields";
import LongInput from "../../ReUseComponents/LongInput/LongInput";
import addStyle from "./Add.module.css";
import AddSelector from "./../AddSelector/AddSelector";
const delayTime = 500;

function validateYear(input) {
  if (isNaN(input)) {
    return false;
  }
  if (input <= 1970 || input > 2050) return false;
  if (input.length < 4 || input.length > 4) return false;
  return true;
}

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }
  delayCheckAllInput = debounce(() => {
    let x = this.state;
    if (
      x.textInput.soVanBan.length > 0 &&
      x.textInput.kyHieuVanBan.length > 0 &&
      x.textInput.tenVanBanPhapLy.length > 0 &&
      validateYear(parseInt(x.textInput.namBanHanh)) === true &&
      x.textInput.trichYeu.length > 0 &&
      x.selectValue > 0
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
  handleUpdateType(e) {
    let value = parseInt(e.target.value);
    this.setState((state) => ({
      ...state,
      textInput: {
        ...state.textInput,
        loaiVanBan: selectTitle[value].vietTat,
      },
      selectValue: value,
      isBtnLoading: true,
    }));
    this.delayCheckAllInput();
  }
  async handleClick() {
    const { isBtnLoading } = this.state;
    if (!isBtnLoading) {
      let x = this.state.textInput;
      const payload = {
        loaiVanBanPhapLy: x.loaiVanBan,
        soVanBan: x.soVanBan,
        kyHieu: x.kyHieuVanBan,
        tenVanBanPhapLy: x.tenVanBan,
        namBanHanh: x.namBanHanh,
        trichYeu: x.trichYeu,
      };
      try {
        let callApiResult = await sendData(API.vanBanPhapLy, payload);
        if (callApiResult.isCreated) {
          this.props.onUpdateDanhSach(callApiResult.item);
          localStorageCleaner(textDraft);
          this.setState({ ...defaultState });
        }
      } catch (err) {
        return;
      }
    }
  }
  render() {
    const { selectValue, textInput, isBtnActive, isBtnLoading } = this.state;
    return (
      <>
        <form className={addStyle["body-left-stage3__add"]} autoComplete="off">
          <AddSelector
            selectValue={selectValue}
            onSelect={(e) => this.handleUpdateType(e)}
          />
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
            mainTitle="Tạo mới"
            icon="fa-regular fa-square-plus"
            isBtnActive={isBtnActive}
            isBtnLoading={isBtnLoading}
            onActive={() => this.handleClick()}
          />
        </form>
      </>
    );
  }
}

function mapStateToProps(fullState, ownProps) {
  return fullState;
}
export default connect(mapStateToProps, null)(Add);
