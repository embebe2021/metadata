import React from "react";
import { connect } from "react-redux";
import InfoDonViGiaoNop from "./InfoDonViGiaoNop/InfoDonViGiaoNop";
import InfoDuAn from "./InfoDuAn/InfoDuAn";
import dataDL from "./testingData/dataDL";
import dataVBPL from "./testingData/dataVBPL";
import Button from "../ReUseComponents/Button/Button";
import convertTimeToVI from "../../ultils/convertTimeToVI";
import draftStateList from "../../store/draftStateList";
import {
  aAddDuLieu,
  aClearAll,
  aUpdateDonVi,
  aUpdateDuAn,
  aUpdateVanBanPhapLy,
} from "../../store/importerMain";
import { sendData } from "../../ultils/callApi";
import API from "../../ultils/API";
import localStorageCleaner from "../../ultils/localStorageCleaner";
import { titlesAndTagsDL, titlesAndTagsVBPL } from "./titlesAndTags";
import TableInfinityScroll from "./../ReUseComponents/TableInfinityScroll/TableInfinityScroll";
import indexStyle from "./index.module.css";

class StateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTableVBPL: false,
      showTableDL: false,
      isBtnActive: false,
    };
  }
  componentDidMount() {
    this.updateComponentFromDraft();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.checkPropsLengthAndUpdateBtn();
    }
  }
  toggleShowTableVBPL() {
    this.setState((state) => ({ showTableVBPL: !state.showTableVBPL }));
  }
  toggleShowTableDL() {
    this.setState((state) => ({ showTableDL: !state.showTableDL }));
  }
  updateComponentFromDraft() {
    // update props from draft
    const updateFunction = this.props.updateFunction;
    let listFnc = Object.keys(updateFunction);
    listFnc.forEach((item, index) => {
      if (localStorage.getItem(draftStateList[index])) {
        updateFunction[item](
          JSON.parse(localStorage.getItem(draftStateList[index]))
        );
      }
    });
  }
  checkPropsLengthAndUpdateBtn() {
    const { listDuLieu, listVanBanPhapLy, infoDonViGiaoNop, infoDuAn } =
      this.props;
    if (
      listDuLieu.length > 0 &&
      listVanBanPhapLy.length > 0 &&
      Object.keys(infoDonViGiaoNop).length > 0 &&
      Object.keys(infoDuAn).length > 0
    ) {
      this.setState({ isBtnActive: true });
    } else {
      this.setState({ isBtnActive: false });
    }
  }
  async handleFinish() {
    const { isBtnActive } = this.state;
    const {
      listDuLieu,
      listVanBanPhapLy,
      infoDonViGiaoNop,
      infoDuAn,
      ClearAllState,
    } = this.props;
    if (isBtnActive) {
      const payload = {
        idDuAn: infoDuAn._id,
        idDonViGiaoNop: infoDonViGiaoNop._id,
        idVanBanPhapLy: listVanBanPhapLy.map((item) => item._id),
        idDuLieu: listDuLieu.map((item) => item._id),
      };
      console.log(payload);
      try {
        let callAPIResult = await sendData(API.finish, payload);
        console.log(callAPIResult);
        if (callAPIResult.updateAllResult === true) {
          localStorageCleaner(draftStateList);
          ClearAllState();
        }
      } catch (err) {
        return;
      }
    }
  }
  render() {
    const { listDuLieu, listVanBanPhapLy } = this.props;
    const { isBtnActive } = this.state;
    let tranformDataDL = [];
    if (listDuLieu.length > 0) {
      tranformDataDL = listDuLieu.map((item, index) => ({
        nhanDe: item.nhanDe,
        tomTat: item.tomTat,
        banQuyen: item.banQuyen,
        phamViDuLieu: item.phamViDuLieu,
        ngayPhatHanh: convertTimeToVI(item.ngayPhatHanh),
      }));
    }
    return (
      <section
        className={`${indexStyle["bodyLeft__stateView"]} ${indexStyle["stateView"]}`}
      >
        <h4 className={indexStyle["stateView--titles"]}>
          Thông tin đang nhập liệu:
        </h4>
        <InfoDuAn />
        <InfoDonViGiaoNop />
        <h4
          className={`${indexStyle["viewStage1"]} ${indexStyle["stateView--titles"]}`}
        >
          Danh sách văn bản pháp lý đã nhập: {listVanBanPhapLy.length} văn bản
        </h4>
        <Button
          mainTitle="Xem"
          icon="fa-solid fa-eye"
          isBtnActive={listVanBanPhapLy.length > 0}
          onActive={this.toggleShowTableVBPL.bind(this)}
        />
        <TableInfinityScroll
          titlesAndTags={titlesAndTagsVBPL}
          isShow={this.state.showTableVBPL}
          data={listVanBanPhapLy}
        />
        <h4
          className={`${indexStyle["viewStage1"]} ${indexStyle["stateView--titles"]}`}
        >
          Danh sách dữ liệu đã nhập: {listDuLieu.length} dữ liệu
        </h4>
        <Button
          mainTitle="Xem"
          icon="fa-solid fa-eye"
          isBtnActive={listDuLieu.length > 0}
          onActive={this.toggleShowTableDL.bind(this)}
        />
        <TableInfinityScroll
          titlesAndTags={titlesAndTagsDL}
          isShow={this.state.showTableDL}
          data={tranformDataDL}
        />
        <Button
          mainTitle="Cập nhật"
          icon="fa-solid fa-cloud-arrow-up"
          isBtnActive={isBtnActive}
          onActive={this.handleFinish.bind(this)}
        />
      </section>
    );
  }
}

function mapStateToProps(fullState, ownProps) {
  return fullState.Importer;
}
function mapDispatchToProps(dispatch) {
  return {
    updateFunction: {
      UpdateDuAnFromDraft: (payload) => dispatch(aUpdateDuAn(payload)),
      UpdateDonViFromDraft: (payload) => dispatch(aUpdateDonVi(payload)),
      UpdateVanBanFromDraft: (payload) =>
        dispatch(aUpdateVanBanPhapLy(payload)),
      UpdateDuLieuFromDraft: (payload) => dispatch(aAddDuLieu(payload)),
    },
    ClearAllState: () => dispatch(aClearAll()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StateView);
