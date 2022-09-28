const textFields = [
  {
    idTag: "soVanBan",
    titles: "Số văn bản:",
    placeHolder: "ví dụ: 04 , < 9 ký tự",
    maxLength: 9,
  },
  {
    idTag: "kyHieuVanBan",
    titles: "Ký hiệu văn bản:",
    placeHolder: "ví dụ: 04-QĐ/BTNMT, < 20 ký tự",
    maxLength: 20,
  },
  {
    idTag: "tenVanBanPhapLy",
    titles: "Tên văn bản:",
    placeHolder: "ví dụ: Quyết định số 04, < 40 ký tự",
    maxLength: 40,
  },
  {
    idTag: "namBanHanh",
    titles: "Năm ban hành:",
    placeHolder: "ví dụ: 2012, < 4 ký tự, từ 1970 - 2050",
    maxLength: 4,
  },
  {
    idTag: "trichYeu",
    titles: "Trích yếu:",
    placeHolder:
      "ví dụ: Quyết định số 04-QĐ/BTNMT ban hành hướng dẫn về việc..., < 100 ký tự",
    maxLength: 100,
  },
];
const textDraft = [
  "soVanBan",
  "kyHieuVanBan",
  "tenVanBanPhapLy",
  "namBanHanh",
  "trichYeu",
];

const selectTitle = [
  {
    ten: "Chọn loại văn bản",
    vietTat: "",
  },
  {
    ten: "Nghị quyết",
    vietTat: "NQ",
  },
  {
    ten: "Quyết định",
    vietTat: "QĐ",
  },
  {
    ten: "Thông tư",
    vietTat: "TT",
  },
  {
    ten: "Chỉ thị",
    vietTat: "CT",
  },
  {
    ten: "Quy chế",
    vietTat: "QC",
  },
  {
    ten: "Quy định",
    vietTat: "QYĐ",
  },
  {
    ten: "Thông cáo",
    vietTat: "TC",
  },
  {
    ten: "Thông báo",
    vietTat: "TB",
  },
  {
    ten: "Hướng dẫn",
    vietTat: "HD",
  },
  {
    ten: "Chương trình",
    vietTat: "CTr",
  },
  {
    ten: "Kế hoạch",
    vietTat: "KH",
  },
  {
    ten: "Phương án",
    vietTat: "PA",
  },
  {
    ten: "Đề án",
    vietTat: "ĐA",
  },
  {
    ten: "Dự án",
    vietTat: "DA",
  },
  {
    ten: "Báo cáo",
    vietTat: "BC",
  },
  {
    ten: "Biên bản",
    vietTat: "BB",
  },
  {
    ten: "Tờ trình",
    vietTat: "TTr",
  },
  {
    ten: "Hợp đồng",
    vietTat: "HĐ",
  },
  {
    ten: "Công văn",
    vietTat: "CV",
  },
  {
    ten: "Bản thỏa thuận",
    vietTat: "BTT",
  },
  {
    ten: "Giấy ủy quyền",
    vietTat: "GUQ",
  },
  {
    ten: "Giấy mời",
    vietTat: "GM",
  },
  {
    ten: "Giấy giới thiệu",
    vietTat: "GGT",
  },
];

const defaultState = {
  textInput: {
    loaiVanBan: "",
    soVanBan: "",
    kyHieuVanBan: "",
    tenVanBanPhapLy: "",
    namBanHanh: "",
    trichYeu: "",
  },
  selectValue: 0,
  isBtnActive: false,
  isBtnLoading: null,
};

export { textFields, textDraft, selectTitle, defaultState };
