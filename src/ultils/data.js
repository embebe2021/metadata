const DuLieuDefaultInfo = {
  nhanDe: "",
  tomTat: "",
  nguonDuLieu: "",
  ngayPhatHanh: {
    ngay: "",
    thang: "",
    nam: ""
  },
  donViCungCap: [],
  banQuyen: "",
  chuDe: "",
  donViLienQuan: [],
  // duLieuLienQuan: [],
  ngonNgu: "",
  dinhDangDuLieu: "",
  phamViDuLieu: "",
  khaNangCungCapSuDung: "",
  thuTucCungCapSuDung: "",
  donViQuanLyDuLieu: [],
  mat: false,
  thongTinMoRongCuaDuLieu: {
    tieuChuan: "",
    phienBan: "",
    donViTinh: "",
    soLuong: "",
    ghiChu: "",
    ngayGiaoNop: {
      ngay: "",
      thang: "",
      nam: ""
    },
    thoiHanBaoQuan: "",
    thoiHanHieuLuc: "",
    tyLe: "",
    heToaDo: "",
    doPhanGiai: "",
    toaDoTamAnh: "",
    tenCanhAnh: "",
    tenVeTinh: "",
    toaDoGocKhung: "",
    tenManh: "",
    phienHieuManh: "",
    kinhTuyenTruc: "",
    muiChieu: ""
  }
  // tuKhoa: []
};

const DULIEU = {
  NHANDE: "nhanDe",
  TOMTAT: "tomTat",
  NGUONDULIEU: "nguonDuLieu",
  // NGAYPHATHANH: "ngayPhatHanh",
  DONVICUNGCAP: "donViCungCap",
  BANQUYEN: "banQuyen",
  CHUDE: "chuDe",
  DONVILIENQUAN: "donViLienQuan",
  DULIEULIENQUAN: "duLieuLienQuan",
  NGONNGU: "ngonNgu",
  DINHDANGDULIEU: "dinhDangDuLieu",
  PHAMVIDULIEU: "phamViDuLieu",
  KHANANGCUNGCAPSUDUNG: "khaNangCungCapSuDung",
  THUTUCCUNGCAPSUDUNG: "thuTucCungCapSuDung",
  DONVIQUANLYDULIEU: "donViQuanLyDuLieu",
  THONGTINMORONGCUADULIEU: "thongTinMoRongCuaDuLieu",
  MAT: "mat",
};

const LIST_DLMR_T = [
  "Tiêu chuẩn",
  "Phiên bản",
  "Đơn vị tính",
  "Số lượng",
  "Ghi chú",
  "Tỷ lệ",
  "Hệ tọa độ",
  "Độ phân giải",
  "Tọa độ tâm ảnh",
  "Tên cảnh ảnh",
  "Tên vệ tinh",
  "Tọa độ góc khung",
  "Tên mảnh",
  "Phiên hiệu mảnh",
  "Kinh tuyến trục",
  "Múi chiếu"
];
const DULIEUMORONG_T = {
  TIEUCHUAN: "tieuChuan",
  PHIENBAN: "phienBan",
  DONVITINH: "donViTinh",
  SOLUONG: "soLuong",
  GHICHU: "ghiChu",
  TYLE: "tyLe",
  HETOADO: "heToaDo",
  DOPHANGIAI: "doPhanGiai",
  TOADOTAMANH: "toaDoTamAnh",
  TENCANHANH: "tenCanhAnh",
  TENVETINH: "tenVeTinh",
  TOADOGOCKHUNG: "toaDoGocKhung",
  TENMANH: "tenManh",
  PHIENHIEUMANH: "phienHieuManh",
  KINHTUYENTRUC: "kinhTuyenTruc",
  MUICHIEU: "muiChieu"
};
const LIST_DLMR_D = ["Ngày giao nộp", "Thời hạn bảo quản", "Thời hạn hiệu lực"];
const DULIEUMORONG_D = {
  NGAYGIAONOP: "ngayGiaoNop",
  THOIHANBAOQUAN: "thoiHanBaoQuan",
  THOIHANHIEULUC: "thoiHanHieuLuc"
};
const LIST_DATE = ["Ngày", "Tháng", "Năm"];
const DATE = {
  NGAY: "ngay",
  THANG: "thang",
  NAM: "nam"
};

export {
  DuLieuDefaultInfo,
  DULIEU,
  DULIEUMORONG_T,
  DULIEUMORONG_D,
  LIST_DLMR_T,
  LIST_DLMR_D,
  LIST_DATE,
  DATE
};
