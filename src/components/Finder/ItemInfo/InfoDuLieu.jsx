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
  const _id = itemInfo?._id,
    nhanDe = itemInfo?.nhanDe,
    tomTat = itemInfo?.tomTat,
    nguonDuLieu = itemInfo?.nguonDuLieu,
    ngayPhatHanh = itemInfo?.ngayPhatHanh,
    banQuyen = itemInfo?.banQuyen,
    chuDe = itemInfo?.chuDe,
    ngonNgu = itemInfo?.ngonNgu,
    phamViDuLieu = itemInfo?.phamViDuLieu,
    khaNangCungCapSuDung = itemInfo?.khaNangCungCapSuDung,
    thuTucCungCapSuDung = itemInfo?.thuTucCungCapSuDung,
    mat = itemInfo?.mat,
    createdAt = itemInfo?.createdAt,
    updatedAt = itemInfo?.updatedAt,
    duAn = itemInfo?.duAn;
  const { donViCungCap, donViLienQuan, donViQuanLyDuLieu } = itemInfo;
  const tieuChuan = itemInfo?.thongTinMoRongCuaDuLieu?.tieuChuan,
    phienBan = itemInfo?.thongTinMoRongCuaDuLieu?.phienBan,
    donViTinh = itemInfo?.thongTinMoRongCuaDuLieu?.donViTinh,
    soLuong = itemInfo?.thongTinMoRongCuaDuLieu?.soLuong,
    ghiChu = itemInfo?.thongTinMoRongCuaDuLieu?.ghiChu,
    ngayGiaoNop = itemInfo?.thongTinMoRongCuaDuLieu?.ngayGiaoNop,
    thoiHanBaoQuan = itemInfo?.thongTinMoRongCuaDuLieu?.thoiHanBaoQuan,
    thoiHanHieuLuc = itemInfo?.thongTinMoRongCuaDuLieu?.thoiHanHieuLuc,
    tyLe = itemInfo?.thongTinMoRongCuaDuLieu?.tyLe,
    heToaDo = itemInfo?.thongTinMoRongCuaDuLieu?.heToaDo,
    doPhanGiai = itemInfo?.thongTinMoRongCuaDuLieu?.doPhanGiai,
    toaDoTamAnh = itemInfo?.thongTinMoRongCuaDuLieu?.toaDoTamAnh,
    tenCanhAnh = itemInfo?.thongTinMoRongCuaDuLieu?.tenCanhAnh,
    tenVeTinh = itemInfo?.thongTinMoRongCuaDuLieu?.tenVeTinh,
    toaDoGocKhung = itemInfo?.thongTinMoRongCuaDuLieu?.toaDoGocKhung,
    tenManh = itemInfo?.thongTinMoRongCuaDuLieu?.tenManh,
    phienHieuManh = itemInfo?.thongTinMoRongCuaDuLieu?.phienHieuManh,
    kinhTuyenTruc = itemInfo?.thongTinMoRongCuaDuLieu?.kinhTuyenTruc,
    muiChieu = itemInfo?.thongTinMoRongCuaDuLieu?.muiChieu;
  return (
    <>
      <div className={itemStyle.itemWrapper}>
        <div className={itemStyle.itemBackButton} onClick={handleClick}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className={itemStyle.itemContainer}>
          <div className={itemStyle.itemTitleWapper}>
            <i className="fa-solid fa-paperclip"></i>
            <h3 className={itemStyle.itemPrimaryTitle}>{nhanDe || ""}</h3>
          </div>

          <div className={itemStyle.itemInfoWapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-regular fa-circle-question"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>Thông tin chung:</h4>
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
                      {_id || ""}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Dữ liệu này thuộc dự án
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {duAn || ""}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Nhan đề:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {nhanDe || ""}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Tóm tắt:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {tomTat || ""}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Nguồn dữ liệu:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {nguonDuLieu || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Ngày phát hành:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {convertTimeToVI(ngayPhatHanh) || ""}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Bản quyền:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {banQuyen || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Chủ đề:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {chuDe || ""}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Ngôn ngữ:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {ngonNgu || ""}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Phạm vi dữ liệu:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {phamViDuLieu || ""}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Khả năng cung cấp sử dụng:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {khaNangCungCapSuDung || ""}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Thủ tục cung cấp sử dụng:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {thuTucCungCapSuDung || ""}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Mật:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {mat ? "có" : "không"}
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
                      {convertTimeToVI(createdAt) || ""}
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
                      {convertTimeToVI(updatedAt) || ""}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={itemStyle.itemSourceWrapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-solid fa-house-flag"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                Đơn vị cung cấp dữ liệu
              </h4>
            </div>
            <div className={itemStyle.itemSourceList}>
              {donViCungCap.map((item, index) => (
                <a
                  href="#"
                  className={itemStyle.itemSourceChild}
                  title={item}
                  key={shortid.generate()}
                >
                  <img
                    className={itemStyle.itemSourceChildImg}
                    src={unitImg}
                    alt="unit_logo"
                  />
                  {/* <span className={itemStyle.itemSourceChildTitle}>
                Trung tâm quan trắc TNMT Biển
              </span> */}
                </a>
              ))}
            </div>
          </div>

          <div className={itemStyle.itemSourceWrapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-solid fa-house-flag"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                Các đơn vị liên quan:
              </h4>
            </div>
            <div className={itemStyle.itemSourceList}>
              {donViLienQuan.map((item, index) => (
                <a
                  href="#"
                  className={itemStyle.itemSourceChild}
                  title={item}
                  key={shortid.generate()}
                >
                  <img
                    className={itemStyle.itemSourceChildImg}
                    src={unitImg}
                    alt="unit_logo"
                  />
                  {/* <span className={itemStyle.itemSourceChildTitle}>
                Trung tâm quan trắc TNMT Biển
              </span> */}
                </a>
              ))}
            </div>
          </div>

          <div className={itemStyle.itemSourceWrapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-solid fa-house-flag"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                Đơn vị quản lý dữ liệu:
              </h4>
            </div>
            <div className={itemStyle.itemSourceList}>
              {donViQuanLyDuLieu.map((item, index) => (
                <a
                  href="#"
                  className={itemStyle.itemSourceChild}
                  title={item}
                  key={shortid.generate()}
                >
                  <img
                    className={itemStyle.itemSourceChildImg}
                    src={unitImg}
                    alt="unit_logo"
                  />
                  {/* <span className={itemStyle.itemSourceChildTitle}>
                Trung tâm quan trắc TNMT Biển
              </span> */}
                </a>
              ))}
            </div>
          </div>

          <div className={itemStyle.itemInfoWapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-solid fa-circle-chevron-down"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                Thông tin mở rộng:
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
                      Tiêu chuẩn:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {tieuChuan || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Phiên bản:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {phienBan || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Đơn vị tính:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {donViTinh || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Số lượng:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {soLuong || ""}
                    </td>
                  </tr>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Ghi chú:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {ghiChu || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Ngày giao nộp:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {convertTimeToVI(ngayGiaoNop) || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Thời hạn bảo quản:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {convertTimeToVI(thoiHanBaoQuan) || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Thời hạn hiệu lực:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {convertTimeToVI(thoiHanHieuLuc) || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Tỷ lệ:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {tyLe || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Hệ tọa độ:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {heToaDo || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Độ phân giải:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {doPhanGiai || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Tọa độ tâm ảnh:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {toaDoTamAnh || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Tên cảnh ảnh:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {tenCanhAnh || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Tên vệ tinh:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {tenVeTinh || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Tọa độ góc khung:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {toaDoGocKhung || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Tên mảnh:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {tenManh || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Phiên hiệu mảnh:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {phienHieuManh || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Kinh tuyến trục:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {kinhTuyenTruc || ""}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Múi chiếu:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {muiChieu || ""}
                    </td>
                  </tr>
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
