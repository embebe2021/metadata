import footerStyle from "./Footer.module.css";
function Footer() {
  return (
    <div className={footerStyle.footerWrapper}>
      <div className={footerStyle.seacherFooter}>
        <div>Trung tâm Thông tin, dữ liệu biển và hải đảo quốc gia</div>
        <div>Địa chỉ: 83 Nguyễn Chí Thanh, Đống Đa, Hà Nội</div>
        <div>Điện thoại: 84-24-376 18118</div>
        <div>© 2022 - From anhbebe with ❤</div>
      </div>
    </div>
  );
}
export default Footer;
