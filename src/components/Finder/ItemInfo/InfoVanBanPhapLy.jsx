import React from "react";
import itemStyle from "./ItemInfo.module.css";
import shortid from "shortid";
import unitImg from "../../../UI/unit.png";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import convertTimeToVI from "./../../../ultils/convertTimeToVI";

const InfoDuAn = ({ itemInfo }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  const {
    _id,
    soVanBan,
    loaiVanBanPhapLy,
    kyHieu,
    tenVanBanPhapLy,
    namBanHanh,
    trichYeu,
    createdAt,
    updatedAt,
  } = itemInfo;
  return (
    <div className={itemStyle.itemWrapper}>
      <div className={itemStyle.itemBackButton} onClick={handleClick}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className={itemStyle.itemContainer}>
        <div className={itemStyle.itemTitleWapper}>
          <i className="fa-regular fa-file-word"></i>
          <h3 className={itemStyle.itemPrimaryTitle}>{tenVanBanPhapLy}</h3>
        </div>

        <div className={itemStyle.itemInfoWapper}>
          <div className={itemStyle.itemTitleWapper}>
            <i className="fa-regular fa-circle-question"></i>
            <h4 className={itemStyle.itemSecondaryTitle}>Thông tin văn bản:</h4>
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
                    ID:
                  </td>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                  >
                    {_id}
                  </td>
                </tr>

                <tr className={itemStyle.tableRow}>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                  >
                    Số văn bản:
                  </td>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                  >
                    {soVanBan}
                  </td>
                </tr>

                <tr className={itemStyle.tableRow}>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                  >
                    Loại văn bản pháp lý:
                  </td>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                  >
                    {loaiVanBanPhapLy}
                  </td>
                </tr>

                <tr className={itemStyle.tableRow}>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                  >
                    Ký hiệu:
                  </td>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                  >
                    {kyHieu}
                  </td>
                </tr>

                <tr className={itemStyle.tableRow}>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                  >
                    Tên văn bản:
                  </td>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                  >
                    {tenVanBanPhapLy}
                  </td>
                </tr>

                <tr className={itemStyle.tableRow}>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                  >
                    Năm ban hành:
                  </td>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                  >
                    {namBanHanh}
                  </td>
                </tr>

                <tr className={itemStyle.tableRow}>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                  >
                    Trích yếu:
                  </td>
                  <td
                    className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                  >
                    {trichYeu}
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDuAn;
