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
      btnTitle = `Đóng`;
      btnIcon = "fa-solid fa-circle-xmark";
    } else {
      (btnTitle = `1. Xem văn bản pháp lý vừa thêm: ${danhSachVanBan.length} văn bản`),
        (btnIcon = "fa-solid fa-eye");
    }
    return (
      <section className={indexStyle["body-left-stage3"]}>
        <h3>Nhập những văn bản pháp lý được giao nộp kèm theo dự án</h3>
        <h4>
          Chọn những văn bản trong danh sách đã tạo hoặc tạo mới những văn bản
          chưa có thông tin
        </h4>
        <AddOrSelect
          nameType="văn bản"
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
            secondColumnTitle="Tên văn bản"
            secondColumnKey="tenVanBanPhapLy"
            thirdColumnTitle="Ký hiệu"
            thirdColumnKey="kyHieu"
            deleteKey="_id"
            onReplaceList={(danhSach) => this.handleReplaceList(danhSach)}
          />
        )}
        <Button
          isPrimaryColor={true}
          mainTitle="2. Thêm những văn bản vừa tạo"
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
