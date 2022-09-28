const textFields = [
  {
    idTag: "nhanDe",
    titles: "Nhan đề:",
    placeHolder:
      "ví dụ: BIÊN BẢN BÀN GIAO SẢN PHẨM: Dự án DHKIU ..., < 100 ký tự",
    maxLength: 100,
    stateKey: "textInput",
  },
  {
    idTag: "tomTat",
    titles: "Tóm tắt:",
    placeHolder:
      "ví dụ: Thống nhất bàn giao sản phẩm Dự án DHKIU ..., < 100 ký tự",
    maxLength: 100,
    stateKey: "textInput",
  },
  {
    idTag: "nguonDuLieu",
    titles: "Nguồn dữ liệu:",
    placeHolder:
      "ví dụ: Bộ XCV, Viện nghiên cứu Biển và Hải đảo..., < 100 ký tự",
    maxLength: 100,
    stateKey: "textInput",
  },
  {
    idTag: "banQuyen",
    titles: "Bản quyền:",
    placeHolder: "ví dụ: Số: 4236/2015/QTG, cấp ngày 12/01/2009, < 100 ký tự",
    maxLength: 100,
    stateKey: "textInput",
  },
  {
    idTag: "chuDe",
    titles: "Chủ đề:",
    placeHolder:
      "ví dụ: Bàn giao sản phẩm thuộc loại hình: Chương trình máy tính",
    maxLength: 100,
    stateKey: "textInput",
  },
  {
    idTag: "ngonNgu",
    titles: "Ngôn ngữ:",
    placeHolder: "ví dụ: Tiếng Việt, < 40 ký tự",
    maxLength: 40,
    stateKey: "textInput",
  },
  {
    idTag: "phamViDuLieu",
    titles: "Phạm vi dữ liệu:",
    placeHolder:
      "ví dụ: Thuộc phạm vi Dự án DHKIU, chuyển giao trong Bộ TNMT, < 100 ký tự",
    maxLength: 100,
    stateKey: "textInput",
  },
  {
    idTag: "khaNangCungCapSuDung",
    titles: "Khả năng cung cấp sử dụng:",
    placeHolder: "ví dụ: Sử dụng tự do, < 100 ký tự",
    maxLength: 100,
    stateKey: "textInput",
  },
  {
    idTag: "thuTucCungCapSuDung",
    titles: "Thủ tục cung cấp sử dụng:",
    placeHolder:
      "ví dụ: Yêu cầu chứng nhận chuyển giao từ Đơn vị CHKI, < 100 ký tự",
    maxLength: 100,
    stateKey: "textInput",
  },
  {
    idTag: "tuKhoa",
    titles: "Từ khóa:",
    placeHolder: "ví dụ: Biên bản, Tên dự án ... < 50 ký tự",
    maxLength: 50,
    stateKey: "textInput",
  },
];
const dateFields = [
  {
    idTag: "ngayPhatHanh",
    titles: "Thời gian phát hành:",
    stateKey: "dateInput",
  },
];
const selectFields = [
  {
    idTag: "donViCungCap",
    titles: "Đơn vị cung cấp dữ liệu:",
    stateKey: "selectInput",
  },
  {
    idTag: "donViLienQuan",
    titles: "Đơn vị liên quan:",
    stateKey: "selectInput",
  },
  {
    idTag: "donViQuanLyDuLieu",
    titles: "Đơn vị quản lý dữ liệu:",
    stateKey: "selectInput",
  },
];
const checkFields = [
  {
    idTag: "mat",
    titles: "Thông tin quản lý, khai thác dữ liệu (mật/không mật):",
    stateKey: "checkInput",
  },
  {
    idTag: "thongTinMoRongCuaDuLieu",
    titles: "Thông tin mở rộng của dữ liệu:",
    stateKey: "checkInput",
  },
];
const duLieuMoRongTextFields = [
  {
    idTag: "tieuChuan",
    titles: "Tiêu chuẩn:",
    placeHolder: "ví dụ: Theo Thông tư 02/2019/TT-BNV, < 50 ký tự",
    maxLength: 50,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "phienBan",
    titles: "Phiên bản:",
    placeHolder: "ví dụ: Phát hành 02/2019, < 50 ký tự",
    maxLength: 50,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "donViTinh",
    titles: "Đơn vị tính:",
    placeHolder: "ví dụ: Quyển/tờ/văn bản..., < 50 ký tự",
    maxLength: 50,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "soLuong",
    titles: "Số lượng:",
    placeHolder: "ví dụ: 02 quyển/ 03 tờ..., < 50 ký tự",
    maxLength: 50,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "ghiChu",
    titles: "Ghi chú:",
    placeHolder: "ví dụ: Quyển số 02, trang 58 mờ mực in..., < 50 ký tự",
    maxLength: 50,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "tyLe",
    titles: "Tỷ lệ:",
    placeHolder: "ví dụ: Tỷ lệ 1:50.000..., < 25 ký tự",
    maxLength: 25,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "heToaDo",
    titles: "Hệ tọa độ:",
    placeHolder: "ví dụ: VN-2000, WGS-84 ..., < 25 ký tự",
    maxLength: 25,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "doPhanGiai",
    titles: "Độ phân giải:",
    placeHolder: "ví dụ: 30m x 30m, < 25 ký tự",
    maxLength: 25,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "toaDoTamAnh",
    titles: "Tọa độ tâm ảnh:",
    placeHolder:
      "là tọa độ kinh độ - vĩ độ, ví dụ: 10.381154, 105.825385, < 60 ký tự",
    maxLength: 60,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "tenCanhAnh",
    titles: "Tên cảnh ảnh:",
    placeHolder: "ví dụ: 17MAR16034254-057202905110_01_P001, < 50 ký tự",
    maxLength: 50,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "tenVeTinh",
    titles: "Tên vệ tinh:",
    placeHolder: "ví dụ: LANDSAT-7, < 50 ký tự",
    maxLength: 50,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "toaDoGocKhung",
    titles: "Tọa độ góc khung:",
    placeHolder:
      "Định dạng Xmin-Xmax;Ymin-Ymax: 109.876-110.127;7.873-7.890, < 250 ký tự",
    maxLength: 250,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "tenManh",
    titles: "Tên mảnh:",
    placeHolder: "ví dụ: Mảnh số 7/23, < 50 ký tự",
    maxLength: 50,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "phienHieuManh",
    titles: "Phiên hiệu mảnh:",
    placeHolder: "ví dụ: D-49-7-103, < 50 ký tự",
    maxLength: 50,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "kinhTuyenTruc",
    titles: "Kinh tuyến trục:",
    placeHolder: "Theo hệ tọa độ quốc gia VN-2000, ví dụ: 103deg45, < 50 ký tự",
    maxLength: 50,
    stateKey: "duLieuMoRongTextInput",
  },
  {
    idTag: "muiChieu",
    titles: "Múi chiếu:",
    placeHolder: "Theo hệ tọa độ quốc gia VN-2000, ví dụ: 3deg, < 25 ký tự",
    maxLength: 25,
    stateKey: "duLieuMoRongTextInput",
  },
];
const duLieuMoRongDateFields = [
  {
    idTag: "thoiGianGiaoNop",
    titles: "Thời gian giao nộp:",
    stateKey: "duLieuMoRongDateInput",
  },
  {
    idTag: "thoiHanBaoQuan",
    titles: "Thời hạn bảo quản:",
    stateKey: "duLieuMoRongDateInput",
  },
  {
    idTag: "thoiHanHieuLuc",
    titles: "Thời hạn hiệu lực:",
    stateKey: "duLieuMoRongDateInput",
  },
];
const textDraft = [
  "nhanDe",
  "tomTat",
  "nguonDuLieu",
  "banQuyen",
  "chuDe",
  "ngonNgu",
  "phamViDuLieu",
  "khaNangCungCapSuDung",
  "thuTucCungCapSuDung",
  "tuKhoa",
  "ngayPhatHanhNgay",
  "ngayPhatHanhThang",
  "ngayPhatHanhNam",
];
const textDuLieuMoRongDraft = [
  "tieuChuan",
  "phienBan",
  "donViTinh",
  "soLuong",
  "ghiChu",
  "tyLe",
  "heToaDo",
  "doPhanGiai",
  "toaDoTamAnh",
  "tenCanhAnh",
  "tenVeTinh",
  "toaDoGocKhung",
  "tenManh",
  "phienHieuManh",
  "kinhTuyenTruc",
  "muiChieu",
  "thoiHanBaoQuanThang",
  "thoiHanHieuLucNgay",
  "thoiGianGiaoNopNgay",
  "thoiHanHieuLucNam",
  "thoiHanBaoQuanNam",
  "thoiGianGiaoNopThang",
  "thoiHanBaoQuanNgay",
  "thoiHanHieuLucThang",
  "thoiGianGiaoNopNam",
];

const defaultState = {
  textInput: {
    nhanDe: "",
    tomTat: "",
    nguonDuLieu: "",
    banQuyen: "",
    chuDe: "",
    ngonNgu: "",
    phamViDuLieu: "",
    khaNangCungCapSuDung: "",
    thuTucCungCapSuDung: "",
    tuKhoa: "",
  },
  dateInput: {
    ngayPhatHanh: {
      Ngay: "",
      Thang: "",
      Nam: "",
      isValidDate: false,
    },
  },
  selectInput: {
    donViCungCap: "",
    donViLienQuan: "",
    donViQuanLyDuLieu: "",
  },
  selectNumber: {
    donViCungCap: 0,
    donViLienQuan: 0,
    donViQuanLyDuLieu: 0,
  },
  checkInput: {
    mat: {
      checked: false,
    },
    thongTinMoRongCuaDuLieu: {
      checked: false,
    },
  },

  duLieuMoRongDateInput: {
    thoiGianGiaoNop: {
      Ngay: "",
      Thang: "",
      Nam: "",
      isValidDate: false,
    },
    thoiHanBaoQuan: {
      Ngay: "",
      Thang: "",
      Nam: "",
      isValidDate: false,
    },
    thoiHanHieuLuc: {
      Ngay: "",
      Thang: "",
      Nam: "",
      isValidDate: false,
    },
  },
  duLieuMoRongTextInput: {
    tieuChuan: "",
    phienBan: "",
    donViTinh: "",
    soLuong: "",
    ghiChu: "",
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
    muiChieu: "",
  },
  dataList: [],
  checkState: {
    isTextInputOk: false,
    isDateInputOk: false,
    isSelectInputOk: false,
    isDuLieuMoRongDateInputOk: false,
    isDuLieuMoRongTextInputOk: false,
    isBtnActive: false,
    isBtnLoading: false,
  },
};

export {
  textFields,
  dateFields,
  selectFields,
  checkFields,
  duLieuMoRongTextFields,
  duLieuMoRongDateFields,
  textDraft,
  textDuLieuMoRongDraft,
  defaultState,
};
