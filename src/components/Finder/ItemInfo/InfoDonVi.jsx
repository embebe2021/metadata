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
    tenDonVi,
    diaChi,
    nguoiDaiDien,
    chucVu,
    soDienThoai,
    email,
    duAnDaGiaoNop,
    duAnCoLienQuan,
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
            <i className="fa-solid fa-house-flag"></i>
            <h3 className={itemStyle.itemPrimaryTitle}>{tenDonVi}</h3>
          </div>

          <div className={itemStyle.itemInfoWapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-regular fa-circle-question"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                Thông tin đơn vị:
              </h4>
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
                      Tên đơn vị:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {tenDonVi}
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

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Địa chỉ
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {diaChi}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Người đại diện
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {nguoiDaiDien}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Chức vụ
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {chucVu}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Số điện thoại
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {soDienThoai}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Email
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {email}
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
                      {convertTimeToVI(updatedAt)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={itemStyle.itemInfoWapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-solid fa-flag-checkered"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                Dự án đã giao nộp:
              </h4>
            </div>
            <div className={itemStyle.itemTableWapper}>
              <table className={itemStyle.itemTable}>
                <thead className={itemStyle.tableHead}>
                  <tr className={itemStyle.tableRow}>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.type2FirstColumn}`}
                    >
                      Số thứ tự
                    </th>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.type2SecondColumn}`}
                    >
                      Tên dự án:
                    </th>
                  </tr>
                </thead>
                <tbody className={itemStyle.tableBody}>
                  {duAnCoLienQuan.length > 0 ? (
                    duAnDaGiaoNop.map((item, index) => (
                      <tr className={itemStyle.tableRow}>
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
                      </tr>
                    ))
                  ) : (
                    <tr className={itemStyle.tableRow}>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                      ></td>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                      ></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className={itemStyle.itemInfoWapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-solid fa-flag-checkered"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                Dự án đã tham gia:
              </h4>
            </div>
            <div className={itemStyle.itemTableWapper}>
              <table className={itemStyle.itemTable}>
                <thead className={itemStyle.tableHead}>
                  <tr className={itemStyle.tableRow}>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.type2FirstColumn}`}
                    >
                      Số thứ tự
                    </th>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.type2SecondColumn}`}
                    >
                      Tên dự án:
                    </th>
                  </tr>
                </thead>
                <tbody className={itemStyle.tableBody}>
                  {duAnCoLienQuan.length > 0 ? (
                    duAnCoLienQuan.map((item, index) => (
                      <tr className={itemStyle.tableRow}>
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
                      </tr>
                    ))
                  ) : (
                    <tr className={itemStyle.tableRow}>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.type2FirstColumn}`}
                      ></td>
                      <td
                        className={`${itemStyle.tableCell} ${itemStyle.type2SecondColumn}`}
                      ></td>
                    </tr>
                  )}
                  {}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDuAn;
