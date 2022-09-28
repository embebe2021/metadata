import debounce from "../../ultils/debounce";
import localStorageCleaner from "../../ultils/localStorageCleaner";
import { textDuLieuMoRongDraft } from "./textFields";

function checkTextInput(input) {
  let stateArr = Object.values(input);
  let result = stateArr.findIndex((item) => item.length <= 0);
  return result;
}
function updateState(component, obj) {
  component.setState((state) => ({
    ...state,
    checkState: {
      ...state.checkState,
      ...obj,
      isBtnLoading: false,
    },
  }));
}

function checkAllInput(component) {
  let {
    textInput,
    dateInput,
    selectInput,
    checkInput,
    duLieuMoRongDateInput,
    duLieuMoRongTextInput,
  } = component.state;

  let isTextInputOk = false,
    isDateInputOk = false,
    isSelectInputOk = false,
    isDuLieuMoRongDateInputOk = false,
    isDuLieuMoRongTextInputOk = false,
    isBtnActive = false;

  checkTextInput(textInput) == -1
    ? (isTextInputOk = true)
    : (isTextInputOk = false);
  dateInput.ngayPhatHanh.isValidDate
    ? (isDateInputOk = true)
    : (isDateInputOk = false);

  selectInput.donViCungCap.length > 0 &&
  selectInput.donViLienQuan.length > 0 &&
  selectInput.donViQuanLyDuLieu.length > 0
    ? (isSelectInputOk = true)
    : (isSelectInputOk = false);

  isSelectInputOk && isDateInputOk && isTextInputOk
    ? (isBtnActive = true)
    : (isBtnActive = false);

  if (checkInput.thongTinMoRongCuaDuLieu.checked === false) {
    updateState(component, {
      isTextInputOk,
      isDateInputOk,
      isSelectInputOk,
      isBtnActive,
    });
    localStorageCleaner(textDuLieuMoRongDraft);
  }

  if (checkInput.thongTinMoRongCuaDuLieu.checked === true) {
    checkTextInput(duLieuMoRongTextInput) == -1
      ? (isDuLieuMoRongTextInputOk = true)
      : (isDuLieuMoRongTextInputOk = false);

    duLieuMoRongDateInput.thoiGianGiaoNop.isValidDate === true &&
    duLieuMoRongDateInput.thoiHanBaoQuan.isValidDate === true &&
    duLieuMoRongDateInput.thoiHanHieuLuc.isValidDate === true
      ? (isDuLieuMoRongDateInputOk = true)
      : (isDuLieuMoRongDateInputOk = false);

    isDuLieuMoRongTextInputOk &&
    isDuLieuMoRongDateInputOk &&
    isSelectInputOk &&
    isDateInputOk &&
    isTextInputOk
      ? (isBtnActive = true)
      : (isBtnActive = false);

    updateState(component, {
      isDuLieuMoRongTextInputOk,
      isDuLieuMoRongDateInputOk,
      isBtnActive,
    });
  }
}

export default checkAllInput;
