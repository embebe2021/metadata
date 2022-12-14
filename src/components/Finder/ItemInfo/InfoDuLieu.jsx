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
              <h4 className={itemStyle.itemSecondaryTitle}>Th??ng tin chung:</h4>
            </div>
            <div className={itemStyle.itemTableWapper}>
              <table className={itemStyle.itemTable}>
                <thead className={itemStyle.tableHead}>
                  <tr className={itemStyle.tableRow}>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Tr?????ng
                    </th>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      Gi?? tr???
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
                      D??? li???u n??y thu???c d??? ??n
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
                      Nhan ?????:
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
                      T??m t???t:
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
                      Ngu???n d??? li???u:
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
                      Ng??y ph??t h??nh:
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
                      B???n quy???n:
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
                      Ch??? ?????:
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
                      Ng??n ng???:
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
                      Ph???m vi d??? li???u:
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
                      Kh??? n??ng cung c???p s??? d???ng:
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
                      Th??? t???c cung c???p s??? d???ng:
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
                      M???t:
                    </td>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      {mat ? "c??" : "kh??ng"}
                    </td>
                  </tr>

                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Ng??y t???o:
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
                      Ng??y c???p nh???t g???n nh???t:
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
                ????n v??? cung c???p d??? li???u
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
                Trung t??m quan tr???c TNMT Bi???n
              </span> */}
                </a>
              ))}
            </div>
          </div>

          <div className={itemStyle.itemSourceWrapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-solid fa-house-flag"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                C??c ????n v??? li??n quan:
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
                Trung t??m quan tr???c TNMT Bi???n
              </span> */}
                </a>
              ))}
            </div>
          </div>

          <div className={itemStyle.itemSourceWrapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-solid fa-house-flag"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                ????n v??? qu???n l?? d??? li???u:
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
                Trung t??m quan tr???c TNMT Bi???n
              </span> */}
                </a>
              ))}
            </div>
          </div>

          <div className={itemStyle.itemInfoWapper}>
            <div className={itemStyle.itemTitleWapper}>
              <i className="fa-solid fa-circle-chevron-down"></i>
              <h4 className={itemStyle.itemSecondaryTitle}>
                Th??ng tin m??? r???ng:
              </h4>
            </div>
            <div className={itemStyle.itemTableWapper}>
              <table className={itemStyle.itemTable}>
                <thead className={itemStyle.tableHead}>
                  <tr className={itemStyle.tableRow}>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Tr?????ng
                    </th>
                    <th
                      className={`${itemStyle.tableCell} ${itemStyle.secondColumn}`}
                    >
                      Gi?? tr???
                    </th>
                  </tr>
                </thead>
                <tbody className={itemStyle.tableBody}>
                  <tr className={itemStyle.tableRow}>
                    <td
                      className={`${itemStyle.tableCell} ${itemStyle.firstColumn}`}
                    >
                      Ti??u chu???n:
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
                      Phi??n b???n:
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
                      ????n v??? t??nh:
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
                      S??? l?????ng:
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
                      Ghi ch??:
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
                      Ng??y giao n???p:
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
                      Th???i h???n b???o qu???n:
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
                      Th???i h???n hi???u l???c:
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
                      T??? l???:
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
                      H??? t???a ?????:
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
                      ????? ph??n gi???i:
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
                      T???a ????? t??m ???nh:
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
                      T??n c???nh ???nh:
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
                      T??n v??? tinh:
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
                      T???a ????? g??c khung:
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
                      T??n m???nh:
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
                      Phi??n hi???u m???nh:
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
                      Kinh tuy???n tr???c:
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
                      M??i chi???u:
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
