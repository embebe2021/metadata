import React from "react";
import { connect } from "react-redux";
import draftStateList from "../../store/draftStateList";
import { aUpdateVanBanPhapLy } from "../../store/importerMain";
import Button from "../ReUseComponents/Button/Button";
import Add from "./Add/Add";
import Select from "./Select/Select";
import Table from "./../ReUseComponents/TablePagination/Table";
import indexStyle from "./index.module.css";
import AddOrSelect from "./../ReUseComponents/AddOrSelect/AddOrSelect";

const DRAFT_KEY = "stage3List";

class Stage3 extends React.Component {
  constructor(props) {
    super(props);
    let x;
    localStorage.getItem(DRAFT_KEY)
      ? (x = JSON.parse(localStorage.getItem(DRAFT_KEY)))
      : (x = []);

    this.state = {
      select: 0,
      danhSachVanBan: x,
      isAllowShowTable: false,
      isShowTable: false,
    };
  }
  componentDidMount() {
    this.setState({ isAllowShowTable: true });
  }
  componentDidUpdate(preProps, preState) {
    if (
      preState.danhSachVanBan.length === 0 &&
      this.state.danhSachVanBan.length > 0
    ) {
      this.setState({ isAllowShowTable: true });
    }
  }
  handleSelect(selectNumber) {
    this.setState((state) => ({
      ...state,
      select: selectNumber,
      isShowTable: false,
    }));
  }
  handleUpdateDanhSach(vanban) {
    this.setState(
      (state) => ({ danhSachVanBan: [...state.danhSachVanBan, vanban] }),
      () => {
        localStorage.setItem(
          DRAFT_KEY,
          JSON.stringify(this.state.danhSachVanBan)
        );
      }
    );
  }
  handleViewTable() {
    const { isAllowShowTable } = this.state;
    if (isAllowShowTable) {
      this.setState({ isShowTable: !this.state.isShowTable });
    }
  }
  handleUpdateID() {
    let idList = this.state.danhSachVanBan;
    localStorage.setItem(draftStateList[2], JSON.stringify(idList));
    this.props.ActionUpdateIdList(idList);
    localStorage.removeItem(DRAFT_KEY);
    this.setState((state) => ({
      ...state,
      danhSachVanBan: [],
      isShowTable: false,
    }));
  }
  handleReplaceList(listDanhSach) {
    this.setState({ danhSachVanBan: listDanhSach }, () => {
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify(this.state.danhSachVanBan)
      );
    });
  }
  render() {
    const {
      allowBtnActive,
      isShowTable,
      danhSachVanBan,
      select,
      isAllowShowTable,
    } = this.state;
    const componentList = [
      <Add
        onUpdateDanhSach={(vanban) => this.handleUpdateDanhSach(vanban)}
        allowBtnActive={allowBtnActive}
      />,
      <Select
        onUpdateDanhSach={(vanban) => this.handleUpdateDanhSach(vanban)}
      />,
    ];
    let btnTitle, btnIcon;
    if (isShowTable) {
      btnTitle = `????ng`;
      btnIcon = "fa-solid fa-circle-xmark";
    } else {
      (btnTitle = `1. Xem v??n b???n ph??p l?? v???a th??m: ${danhSachVanBan.length} v??n b???n`),
        (btnIcon = "fa-solid fa-eye");
    }
    return (
      <section className={indexStyle["body-left-stage3"]}>
        <h3>Nh???p nh???ng v??n b???n ph??p l?? ???????c giao n???p k??m theo d??? ??n</h3>
        <h4>
          Ch???n nh???ng v??n b???n trong danh s??ch ???? t???o ho???c t???o m???i nh???ng v??n b???n
          ch??a c?? th??ng tin
        </h4>
        <AddOrSelect
          nameType="v??n b???n"
          idTag="VanBanPhapLy"
          selectedNumber={select}
          onSelect={(selectNumber) => this.handleSelect(selectNumber)}
        ></AddOrSelect>
        {componentList[select]}
        <Button
          mainTitle={btnTitle}
          icon={btnIcon}
          isBtnActive={isAllowShowTable}
          onActive={() => this.handleViewTable()}
        />
        {isShowTable && (
          <Table
            itemPerPage={10}
            rowHeight={4}
            dataList={danhSachVanBan}
            rowIcon="fa-solid fa-file-word"
            firstColumnTitle="STT"
            secondColumnTitle="T??n v??n b???n"
            secondColumnKey="tenVanBanPhapLy"
            thirdColumnTitle="K?? hi???u"
            thirdColumnKey="kyHieu"
            deleteKey="_id"
            onReplaceList={(danhSach) => this.handleReplaceList(danhSach)}
          />
        )}
        <Button
          isPrimaryColor={true}
          mainTitle="2. Th??m nh???ng v??n b???n v???a t???o"
          icon="fa-solid fa-plus"
          isBtnActive={danhSachVanBan.length > 0}
          onActive={() => this.handleUpdateID()}
        />
      </section>
    );
  }
}
function mapStateToProps(fullState, ownProps) {
  return fullState;
}
function mapDispatchToProps(dispatch) {
  return {
    ActionUpdateIdList: (payload) => dispatch(aUpdateVanBanPhapLy(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stage3);
