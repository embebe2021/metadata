import React from "react";
import Selector from "../Selector/Selector";
import { getData } from "../../../ultils/callApi";
import API from "../../../ultils/API";
import Button from "../../ReUseComponents/Button/Button";
import debounce from "../../../ultils/debounce";
import { aUpdateVanBanPhapLy } from "../../../store/importerMain";
import { connect } from "react-redux";
import selectStyle from "./Select.module.css";

const delayTime = 500;

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      selectValue: 0,
      isBtnActive: false,
      isBtnLoading: false,
    };
  }
  abortController = new AbortController();
  componentDidMount() {
    getData(API.vanBanPhapLy, this.abortController.signal)
      .then((data) => {
        if (data) {
          this.setState((state) => ({
            ...state,
            dataList: data,
          }));
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
    this.updateSelection.cancel();
  }
  updateSelection = debounce(() => {
    this.setState((state) => ({
      ...state,
      isBtnActive: true,
      isBtnLoading: false,
    }));
  }, delayTime / 2);
  handleSelect(e) {
    if (e.target.value > 0) {
      this.setState((state) => ({
        ...state,
        selectValue: parseInt(e.target.value),
        isBtnLoading: true,
      }));
      this.updateSelection();
    } else {
      this.setState((state) => ({
        ...state,
        selectValue: 0,
        isBtnActive: false,
        isBtnLoading: false,
      }));
    }
  }
  handleClick() {
    const { dataList, selectValue, isBtnLoading } = this.state;
    if (!isBtnLoading) {
      this.props.onUpdateDanhSach(dataList[selectValue - 1]);
      this.setState((state) => ({
        ...state,
        selectValue: 0,
        isBtnActive: false,
        isBtnLoading: false,
      }));
    }
  }
  render() {
    const { dataList, selection, isBtnActive, isBtnLoading } = this.state;
    return (
      <>
        <div className={selectStyle["body-left-stage3__select"]}>
          <Selector
            data={dataList}
            selectValue={selection}
            onSelect={(e) => this.handleSelect(e)}
          />
          <Button
            mainTitle="Chọn văn bản"
            icon="fa-solid fa-circle-check"
            isBtnActive={isBtnActive}
            isBtnLoading={isBtnLoading}
            onActive={() => this.handleClick()}
          />
        </div>
      </>
    );
  }
}
function mapStateToProps(fullState, ownProps) {
  return fullState;
}
function mapDispatchToProps(dispatch) {
  return {
    ActionVanBanPhapLy: (payload) => dispatch(aUpdateVanBanPhapLy(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Select);
