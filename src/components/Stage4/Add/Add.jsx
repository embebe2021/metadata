import React from "react";
import debounce from "../../../ultils/debounce";
import localStorageCleaner from "../../../ultils/localStorageCleaner";
import { getData, sendData } from "../../../ultils/callApi";
import API from "../../../ultils/API";
import Button from "../../ReUseComponents/Button/Button";
import { connect } from "react-redux";
import {
  textFields,
  dateFields,
  selectFields,
  checkFields,
  duLieuMoRongTextFields,
  duLieuMoRongDateFields,
  textDraft,
  defaultState,
  textDuLieuMoRongDraft,
} from "../textFields";
import Selector from "../Selector/Selector";
import { checkValidDate } from "../../../ultils/Validator";
import checkAll from "../checkAllInput";
import { aActionOnClick, aActionSetLoaded } from "../../../store/loader";
import LongInput from "../../ReUseComponents/LongInput/LongInput";
import LongTimeInput from "../../ReUseComponents/LongTimeInput/LongTimeInput";
import addStyle from "./Add.module.css";
import Checkbox from "./../../ReUseComponents/Checkbox/Checkbox";

const delayTime = 500;
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }
  checkAllInput = debounce((component) => {
    checkAll(component);
  }, delayTime);
  checkValidDateInput = debounce((stateKey, idTag) => {
    this.setState(
      (state) => ({
        ...state,
        [stateKey]: {
          ...state[stateKey],
          [idTag]: {
            ...state[stateKey][idTag],
            isValidDate: checkValidDate(
              state[stateKey][idTag].Ngay,
              state[stateKey][idTag].Thang,
              state[stateKey][idTag].Nam
            ),
          },
        },
        checkState: {
          ...state.checkState,
          isBtnLoading: true,
        },
      }),
      () => {
        this.checkAllInput(this);
      }
    );
  }, delayTime / 2);

  abortController = new AbortController();
  componentDidMount() {
    getData(API.donVi, this.abortController.signal)
      .then((data) => {
        if (data) {
          this.setState({ dataList: data }, () => {
            this.checkAllInput(this);
          });
        } else {
          throw new Error("Something went wrong!");
        }
      })
      .catch((err) => {
        return;
      });
  }
  componentWillUnmount() {
    this.abortController.abort();
    this.checkValidDateInput.cancel();
    this.checkAllInput.cancel();
  }
  handleUpdateInput(value, idTag, stateKey) {
    this.setState(
      (state) => ({
        [stateKey]: {
          ...state[stateKey],
          [idTag]: value,
        },
        checkState: {
          ...state.checkState,
          isBtnLoading: true,
        },
      }),
      () => {
        this.checkAllInput(this);
      }
    );
  }
  handleUpdateDate(value, type, obj, stateKey, idTag) {
    if (obj === null) {
      this.setState(
        (state) => {
          return {
            ...state,
            [stateKey]: {
              ...state[stateKey],
              [idTag]: {
                ...state[stateKey][idTag],
                [type]: value,
              },
            },
            checkState: {
              ...state.checkState,
              isBtnLoading: true,
            },
          };
        },
        () => {
          this.checkValidDateInput(stateKey, idTag);
        }
      );
    } else {
      this.setState(
        (state) => ({
          ...state,
          [stateKey]: {
            ...state[stateKey],
            [idTag]: obj,
          },
          checkState: {
            ...state.checkState,
            isBtnLoading: true,
          },
        }),
        () => {
          this.checkValidDateInput(stateKey, idTag);
        }
      );
    }
  }
  handleUpdateSelectID(select, stateKey, idTag) {
    if (select > 0) {
      this.setState(
        (state) => ({
          ...state,
          [stateKey]: {
            ...state[stateKey],
            [idTag]: state.dataList[select - 1]._id,
          },
          selectNumber: {
            ...state.selectNumber,
            [idTag]: select,
          },
          checkState: {
            ...state.checkState,
            isBtnLoading: true,
          },
        }),
        () => {
          this.checkAllInput(this);
        }
      );
    }
  }
  handleChecked(e, stateKey, idTag) {
    this.setState(
      (state) => ({
        ...state,
        [stateKey]: {
          ...state[stateKey],
          [idTag]: {
            checked: e.target.checked,
          },
        },
        checkState: {
          ...state.checkState,
          isBtnLoading: true,
        },
      }),
      () => {
        this.checkAllInput(this);
      }
    );
  }
  async handleClick() {
    if (!this.state.checkState.isBtnLoading) {
      const {
        textInput,
        dateInput,
        selectInput,
        checkInput,
        duLieuMoRongDateInput,
        duLieuMoRongTextInput,
      } = this.state;

      const duLieu = {
        nhanDe: textInput.nhanDe,
        tomTat: textInput.tomTat,
        nguonDuLieu: textInput.nguonDuLieu,
        banQuyen: textInput.banQuyen,
        chuDe: textInput.chuDe,
        ngonNgu: textInput.ngonNgu,
        phamViDuLieu: textInput.phamViDuLieu,
        khaNangCungCapSuDung: textInput.khaNangCungCapSuDung,
        thuTucCungCapSuDung: textInput.thuTucCungCapSuDung,
        tuKhoa: textInput.tuKhoa,
        donViCungCap: selectInput.donViCungCap,
        donViQuanLyDuLieu: selectInput.donViQuanLyDuLieu,
        donViLienQuan: selectInput.donViLienQuan,
        mat: checkInput.mat.checked,
        ngayPhatHanh: {
          ngay: dateInput.ngayPhatHanh.Ngay,
          thang: dateInput.ngayPhatHanh.Thang,
          nam: dateInput.ngayPhatHanh.Nam,
        },
        thongTinMoRongCuaDuLieu: {
          isAttach: false,
        },
      };
      const duLieuMoRong = {
        thongTinMoRongCuaDuLieu: {
          isAttach: true,
          tieuChuan: duLieuMoRongTextInput.tieuChuan,
          phienBan: duLieuMoRongTextInput.phienBan,
          donViTinh: duLieuMoRongTextInput.donViTinh,
          soLuong: duLieuMoRongTextInput.soLuong,
          ghiChu: duLieuMoRongTextInput.ghiChu,
          tyLe: duLieuMoRongTextInput.tyLe,
          heToaDo: duLieuMoRongTextInput.heToaDo,
          doPhanGiai: duLieuMoRongTextInput.doPhanGiai,
          toaDoTamAnh: duLieuMoRongTextInput.toaDoTamAnh,
          tenCanhAnh: duLieuMoRongTextInput.tenCanhAnh,
          tenVeTinh: duLieuMoRongTextInput.tenVeTinh,
          toaDoGocKhung: duLieuMoRongTextInput.toaDoGocKhung,
          tenManh: duLieuMoRongTextInput.tenManh,
          phienHieuManh: duLieuMoRongTextInput.phienHieuManh,
          kinhTuyenTruc: duLieuMoRongTextInput.kinhTuyenTruc,
          muiChieu: duLieuMoRongTextInput.muiChieu,
          ngayGiaoNop: {
            ngay: duLieuMoRongDateInput.thoiGianGiaoNop.Ngay,
            thang: duLieuMoRongDateInput.thoiGianGiaoNop.Thang,
            nam: duLieuMoRongDateInput.thoiGianGiaoNop.Nam,
          },
          thoiHanBaoQuan: {
            ngay: duLieuMoRongDateInput.thoiHanBaoQuan.Ngay,
            thang: duLieuMoRongDateInput.thoiHanBaoQuan.Thang,
            nam: duLieuMoRongDateInput.thoiHanBaoQuan.Nam,
          },
          thoiHanHieuLuc: {
            ngay: duLieuMoRongDateInput.thoiHanHieuLuc.Ngay,
            thang: duLieuMoRongDateInput.thoiHanHieuLuc.Thang,
            nam: duLieuMoRongDateInput.thoiHanHieuLuc.Nam,
          },
        },
      };
      let payload;
      checkInput.thongTinMoRongCuaDuLieu.checked === true
        ? (payload = { ...duLieu, ...duLieuMoRong })
        : (payload = { ...duLieu });
      try {
        let callApiResult = await sendData(API.duLieu, payload);
        if (callApiResult.isCreated) {
          this.props.onUpdateDanhSach(callApiResult.item);
          localStorageCleaner([...textDraft, ...textDuLieuMoRongDraft]);
          this.setState((state) => ({
            ...defaultState,
            dataList: [...state.dataList],
          }));
        }
      } catch (err) {
        return;
      }
    }
  }
  render() {
    const { checkState, selectNumber, dataList, checkInput } = this.state;
    return (
      <>
        <form className={addStyle["body-left-stage4__form"]} autoComplete="off">
          {textFields.map((item, index) => (
            <LongInput
              key={index + "abc"}
              maxLength={item.maxLength}
              idTag={item.idTag}
              mainTitle={item.titles}
              stateKey={item.stateKey}
              placeHolder={item.placeHolder}
              inputValue={this.state[item.stateKey][item.idTag]}
              onUpdateInput={(value, idTag, stateKey) =>
                this.handleUpdateInput(value, idTag, stateKey)
              }
            />
          ))}
          {dateFields.map((item, index) => (
            <LongTimeInput
              key={index + "abc"}
              idTag={item.idTag}
              stateKey={item.stateKey}
              mainTitle={item.titles}
              dateInputValues={this.state[item.stateKey][item.idTag]}
              isValidDate={this.state[item.stateKey][item.idTag].isValidDate}
              onUpdateDate={(values, type, obj, stateKey, idTag) => {
                this.handleUpdateDate(values, type, obj, stateKey, idTag);
              }}
            />
          ))}
          {selectFields.map((item, index) => (
            <React.Fragment key={item.idTag + index}>
              <span>{item.titles}</span>
              <Selector
                idTag={item.idTag}
                stateKey={item.stateKey}
                data={dataList}
                selectValue={selectNumber[item.idTag]}
                onSelect={this.handleUpdateSelectID.bind(this)}
              />
            </React.Fragment>
          ))}

          {checkFields.map((item, index) => (
            <Checkbox
              key={item.idTag + index}
              stateKey={item.stateKey}
              idTag={item.idTag}
              title={item.titles}
              checked={this.state[item.stateKey][item.idTag].checked}
              onCheck={this.handleChecked.bind(this)}
            />
          ))}
          {checkInput.thongTinMoRongCuaDuLieu.checked && (
            <>
              {duLieuMoRongTextFields.map((item, index) => (
                <LongInput
                  key={index + "abc"}
                  maxLength={item.maxLength}
                  idTag={item.idTag}
                  stateKey={item.stateKey}
                  mainTitle={item.titles}
                  placeHolder={item.placeHolder}
                  inputValue={this.state[item.stateKey][item.idTag]}
                  onUpdateInput={(value, idTag, stateKey) =>
                    this.handleUpdateInput(value, idTag, stateKey)
                  }
                />
              ))}
              {duLieuMoRongDateFields.map((item, index) => (
                <LongTimeInput
                  key={index + "abc"}
                  idTag={item.idTag}
                  stateKey={item.stateKey}
                  mainTitle={item.titles}
                  dateInputValues={this.state[item.stateKey][item.idTag]}
                  isValidDate={
                    this.state[item.stateKey][item.idTag].isValidDate
                  }
                  onUpdateDate={(values, type, obj, stateKey, idTag) => {
                    this.handleUpdateDate(values, type, obj, stateKey, idTag);
                  }}
                />
              ))}
            </>
          )}

          <Button
            mainTitle="Tạo mới"
            icon="fa-regular fa-square-plus"
            isBtnActive={checkState.isBtnActive}
            isBtnLoading={checkState.isBtnLoading}
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
