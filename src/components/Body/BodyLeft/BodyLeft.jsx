import NavBarLeft from "../../NavbarLeft/NavbarLeft";
import bodyLeftStyle from "./BodyLeft.module.css";

const BodyLeft = () => {
  return (
    <>
      <div className={bodyLeftStyle["body-left"]}>
        <div className={bodyLeftStyle["body-left__title"]}>
          <i className="fa-solid fa-file-import"></i>
          <h2>Thêm số liệu</h2>
        </div>

        <NavBarLeft />
      </div>
    </>
  );
};
export default BodyLeft;
