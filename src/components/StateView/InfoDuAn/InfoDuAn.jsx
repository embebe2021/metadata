import React from "react";
import { connect } from "react-redux";
import convertTimeToVI from "../../../ultils/convertTimeToVI";
import infoDonVi from "./InfoDuAn.module.css";

class InfoDuAn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { infoDuAn } = this.props;

    let thoiGianNop = "",
      ngayCapNhat = "",
      ngayNhapLieu = "";
    if (Object.keys(infoDuAn).length > 0) {
      thoiGianNop = convertTimeToVI(infoDuAn.thoiGianNop);
      ngayNhapLieu = convertTimeToVI(infoDuAn.createdAt);
      ngayCapNhat = convertTimeToVI(infoDuAn.updatedAt);
    }
    return (
      <>
        <div
          className={`${infoDonVi["stateView__stage1"]} ${infoDonVi["viewStage1"]}`}
        >
          <h4 className={infoDonVi["stateView--titles"]}>Dự án:</h4>
          {Object.keys(infoDuAn).length === 0 ? (
            <p>Chưa chọn hoặc nhập dự án !</p>
          ) : (
            <table className={infoDonVi["viewStage1__table"]}>
              <tbody className={infoDonVi["viewStage1__tableBody"]}>
                <tr className={infoDonVi["viewStage1__tableRow"]}>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--firstColumn"]}`}
                  >
                    Tên dự án:
                  </td>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--secondColumn"]}`}
                  >
                    {infoDuAn.thongTinDuAn?.tenDuAn
                      ? infoDuAn.thongTinDuAn.tenDuAn
                      : ""}
                  </td>
                </tr>
                <tr className={infoDonVi["viewStage1__tableRow"]}>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--firstColumn"]}`}
                  >
                    Văn bản pháp lý liên quan:
                  </td>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--secondColumn"]}`}
                  >
                    {infoDuAn.thongTinDuAn?.vanBanPhapLyLienQuan
                      ? infoDuAn.thongTinDuAn.vanBanPhapLyLienQuan
                      : ""}
                  </td>
                </tr>
                <tr className={infoDonVi["viewStage1__tableRow"]}>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--firstColumn"]}`}
                  >
                    Thời gian nộp:
                  </td>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--secondColumn"]}`}
                  >
                    {thoiGianNop}
                  </td>
                </tr>
                <tr className={infoDonVi["viewStage1__tableRow"]}>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--firstColumn"]}`}
                  >
                    Ngày nhập liệu:
                  </td>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--secondColumn"]}`}
                  >
                    {ngayNhapLieu}
                  </td>
                </tr>
                <tr className={infoDonVi["viewStage1__tableRow"]}>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--firstColumn"]}`}
                  >
                    Cập nhật gần nhất:
                  </td>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--secondColumn"]}`}
                  >
                    {ngayCapNhat}
                  </td>
                </tr>
                <tr className={infoDonVi["viewStage1__tableRow"]}>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--firstColumn"]}`}
                  >
                    ID:
                  </td>
                  <td
                    className={`${infoDonVi["viewStage1__tableCell"]} ${infoDonVi["viewStage1__tableCell--secondColumn"]}`}
                  >
                    {infoDuAn?._id ? infoDuAn._id : ""}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </>
    );
  }
}

function mapStateToProps(fullState, ownProps) {
  return fullState.Importer;
}
export default connect(mapStateToProps, null)(InfoDuAn);
