
const textFields = [
  {
    idTag: "tenDonVi",
    titles: "Tên cơ quan, tổ chức:",
    placeHolder: "ví dụ: Trung tâm Hải Văn, < 50 ký tự",
    maxLength: 50,
  },
  {
    idTag: "diaChi",
    titles: "Địa chỉ:",
    placeHolder: "ví dụ: 83 Nguyễn Chí Thanh, Đống Đa, Hà Nội, < 100 ký tự",
    maxLength: 100,
  },
  {
    idTag: "nguoiDaiDien",
    titles: "Người đại diện:",
    placeHolder: "ví dụ: Nguyễn Văn B, < 40 ký tự",
    maxLength: 40,
  },
  {
    idTag: "chucVu",
    titles: "Chức vụ:",
    placeHolder: "ví dụ: Giám đốc, < 20 ký tự",
    maxLength: 20,
  },
  {
    idTag: "soDienThoai",
    titles: "Số điện thoại:",
    placeHolder: "ví dụ: 0966037898, < 12 ký tự",
    maxLength: 12,
  },
  {
    idTag: "email",
    titles: "Email:",
    placeHolder: "ví dụ: vanphonghaivan@mail.gov.vn, < 20 ký tự",
    maxLength: 40,
  },
];
const textDraft = [
  "tenDonVi",
  "diaChi",
  "nguoiDaiDien",
  "chucVu",
  "soDienThoai",
  "email",
];

const defaultState = {
  textInput: {
    tenDonVi: "",
    diaChi: "",
    nguoiDaiDien: "",
    chucVu: "",
    soDienThoai: "",
    email: "",
  },
  isValidEmail: false,
  isBtnActive: false,
  isBtnLoading: null,
  isDoubleOrganization: false,
};

export {
  textFields,
  textDraft,
  defaultState
}