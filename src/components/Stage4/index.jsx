import React from "react";
import { connect } from "react-redux";
import draftStateList from "../../store/draftStateList";
import { aAddDuLieu } from "../../store/importerMain";
import Button from "../ReUseComponents/Button/Button";
import Add from "./Add/Add";
import Table from "./../ReUseComponents/TablePagination/Table";
import indexStyle from "./index.module.css";

const DRAFT_KEY = "stage4List";

class Stage4 extends React.Component {
  constructor(props) {
    super(props);
    let x;
    localStorage.getItem(DRAFT_KEY)
      ? (x = JSON.parse(localStorage.getItem(DRAFT_KEY)))
      : (x = []);

    this.state = {
      danhSachDuLieu: x,
      isAllowShowTable: false,
      isShowTable: false,
    };
  }
  componentDidMount() {
    this.setState({ isAllowShowTable: true });
  }
  componentDidUpdate(preProps, preState) {
    if (
      preState.danhSachDuLieu.length === 0 &&
      this.state.danhSachDuLieu.length > 0
    ) {
      this.setState({ isAllowShowTable: true });
    }
  }
  handleUpdateDanhSach(duLieu) {
    this.setState(
      (state) => ({
        ...state,
        danhSachDuLieu: [...state.danhSachDuLieu, duLieu],
      }),
      () => {
        localStorage.setItem(
          DRAFT_KEY,
          JSON.stringify(this.state.danhSachDuLieu)
        );
      }
    );
  }
  handleReplaceList(listDanhSach) {
    this.setState({ danhSachDuLieu: listDanhSach }, () => {
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify(this.state.danhSachDuLieu)
      );
    });
  }
  handleViewTable() {
    const { isAllowShowTable, isShowTable } = this.state;
    if (isAllowShowTable) {
      this.setState({ isShowTable: !isShowTable });
    }
  }
  handleUpdateID() {
    let x = this.state.danhSachDuLieu;
    localStorage.setItem(draftStateList[3], JSON.stringify(x));
    this.props.ActionUpdateIdList(x);
    localStorage.removeItem(DRAFT_KEY);
    this.setState((state) => ({
      ...state,
      danhSachDuLieu: [],
      isShowTable: false,
    }));
  }
  render() {
    const { isShowTable, isAllowShowTable, danhSachDuLieu } = this.state;

    let btnTitle, btnIcon;
    if (isShowTable) {
      btnTitle = `Đóng`;
      btnIcon = "fa-solid fa-circle-xmark";
    } else {
      (btnTitle = `1. Xem văn bản pháp lý vừa thêm: ${danhSachDuLieu.length} dữ liệu`),
        (btnIcon = "fa-solid fa-eye");
    }
    return (
      <>
        <section className={indexStyle["body-left-stage4"]}>
          <h3>Nhập thông tin dữ liệu giao nộp</h3>
          <h4>Nhập những trường thông tin dưới đây</h4>
          <div className={indexStyle["body-left-stage4-wrapper"]}>
            <Add
              onUpdateDanhSach={(duLieu) => this.handleUpdateDanhSach(duLieu)}
            />
          </div>
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
              rowIcon="fa-solid fa-file"
              dataList={danhSachDuLieu}
              firstColumnTitle="STT"
              secondColumnTitle="Nhan đề"
              secondColumnKey="nhanDe"
              thirdColumnTitle="Tóm tắt"
              thirdColumnKey="tomTat"
              deleteKey="_id"
              onReplaceList={(danhSach) => this.handleReplaceList(danhSach)}
            />
          )}
          <Button
            isPrimaryColor={true}
            mainTitle="2. Thêm dữ liệu vừa tạo"
            icon="fa-solid fa-plus"
            isBtnActive={danhSachDuLieu.length > 0}
            onActive={() => this.handleUpdateID()}
          />
        </section>
      </>
    );
  }
}
function mapStateToProps(fullState, ownProps) {
  return fullState;
}
function mapDispatchToProps(dispatch) {
  return {
    ActionUpdateIdList: (payload) => dispatch(aAddDuLieu(payload)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Stage4);
