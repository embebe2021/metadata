import React from "react";
import Selector from "../Selector/Selector";
import { getData } from "../../../ultils/callApi";
import API from "../../../ultils/API";
import Button from "../../ReUseComponents/Button/Button";
import debounce from "../../../ultils/debounce";
import { aUpdateDonVi } from "../../../store/importerMain";
import { connect } from "react-redux";
import draftStateList from "../../../store/draftStateList";
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
    getData(API.donVi, this.abortController.signal)
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
      localStorage.setItem(
        draftStateList[1],
        JSON.stringify(dataList[selectValue - 1])
      );
      this.props.ActionUpdateDonVi(dataList[selectValue - 1]);
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
        <div className={selectStyle["body-left-stage2-organization__select"]}>
          <Selector
            data={dataList}
            selectValue={selection}
            onSelect={(e) => this.handleSelect(e)}
          />
          <Button
            isPrimaryColor={true}
            mainTitle="Chọn đơn vị"
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
    ActionUpdateDonVi: (payload) => dispatch(aUpdateDonVi(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Select);
