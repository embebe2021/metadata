import React from "react";
import itemStyle from "./ItemInfo.module.css";
import shortid from "shortid";
// import unitImg from "../../../UI/unit.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import convertTimeToVI from "./../../../ultils/convertTimeToVI";
const srcHost = process.env.REACT_APP_SRC_HOST;
const unitImg = "/src/img/unit.png";

const InfoDuAn = ({ itemInfo }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  const {
    thongTinDuAn,
    thongTinDonViThucHien,
    _id,
    thongTinDuLieu,
    thoiGianNop,
    cacVanBanPhapLyGiaoNop,
    createdAt,
    updatedAt,
  } = itemInfo;
  return (
    <>
      <div className={itemStyle.itemWrapper}>
        <div className={itemStyle.itemBackButton} onClick={handleClick}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>

        <div className={itemStyle.itemContainer}>
          <div className={itemStyle.itemTitleWapper}>
            <i className="fa-solid fa-flag-checkered"></i>
            <h3 className={itemStyle.itemPrimaryTitle}>
              {thongTinDuAn.tenDuAn}
            </h3>
          </div>
          <div className={itemStyle.itemInfoWapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-regular fa-circle-question"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>Thông tin Dự án:</h4>
            </div>
            <div className={itemStyle.itemTableWapper}>
              <table className={itemStyle.itemTable}>
                <thead className={itemStyle.tableHead}>
                  <tr className={itemStyle.tableRow}>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Trường
                    </th>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      Giá trị
                    </th>
                  </tr>
                </thead>
                <tbody className={itemStyle.tableBody}>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Tên dự án:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {thongTinDuAn.tenDuAn}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Thời gian nộp:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {convertTimeToVI(thoiGianNop)}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Ngày tạo:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {convertTimeToVI(createdAt)}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Ngày cập nhật gần nhất:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {convertTimeToVI(createdAt)}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      ID:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {_id}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={itemStyle.itemFileAttachWapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-solid fa-paperclip"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                Dữ liệu đính kèm:
              </h4>
            </div>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-regular fa-folder-closed"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>Dữ liệu:</h4>
            </div>
            <div className={itemStyle.itemTableWapper}>
              <table className={itemStyle.itemTable}>
                <thead className={itemStyle.tableHead}>
                  <tr className={itemStyle.tableRow}>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.type2HeadFirstColumn}`}
                    >
                      Số thứ tự
                    </th>
                    <th
                      colSpan="3"
                      className={`${itemStyle.tableCell} ${itemStyle.type2HeadSecondColumn}`}
                    >
                      Tên tệp
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {thongTinDuLieu.map((item, index) => (
                    <tr className={itemStyle.tableRow} key={shortid.generate()}>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.type2FirstColumn}`}
                      >
                        {index}
                      </td>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.type2SecondColumn}`}
                      >
                        {item}
                      </td>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.type2ThirdColumn}`}
                      >
                        <a href="#">Xem</a>
                      </td>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.type2LastColumn}`}
                      >
                        <a href="#">Tải về</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-regular fa-file-word"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                Các văn bản pháp lý:
              </h4>
            </div>
            <div className={itemStyle.itemTableWapper}>
              <table className={itemStyle.itemTable}>
                <thead className={itemStyle.tableHead}>
                  <tr className={itemStyle.tableRow}>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.type2HeadFirstColumn}`}
                    >
                      Số thứ tự
                    </th>
                    <th
                      colSpan="3"
                      className={`${itemStyle.tableCell} ${itemStyle.type2HeadSecondColumn}`}
                    >
                      Tên văn bản
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cacVanBanPhapLyGiaoNop.map((item, index) => (
                    <tr className={itemStyle.tableRow} key={shortid.generate()}>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.type2FirstColumn}`}
                      >
                        {index}
                      </td>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.type2SecondColumn}`}
                      >
                        {item}
                      </td>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.type2ThirdColumn}`}
                      >
                        <a href="#">Xem</a>
                      </td>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.type2LastColumn}`}
                      >
                        <a href="#">Tải về</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={itemStyle.itemSourceWrapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-solid fa-house-flag"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                Các đơn vị tham gia:
              </h4>
            </div>
            <div className={itemStyle.itemSourceList}>
              {thongTinDonViThucHien.map((item, index) => (
                <a
                  href="#"
                  className={itemStyle.itemSourceChild}
                  title={item}
                  key={shortid.generate()}
                >
                  <img
                    className={itemStyle.itemSourceChildImg}
                    src={srcHost + unitImg}
                    alt="unit_logo"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDuAn;
