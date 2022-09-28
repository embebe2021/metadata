// import logoImg from "../../UI/vodic_ico.png";
import headerStyle from "./Header.module.css";
import HeaderRightMenu from "./HeaderRightMenu/HeaderRightMenu";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const srcHost = process.env.REACT_APP_SRC_HOST;
const homePage = process.env.REACT_APP_HOMEPAGE;
const logoImg = "/src/img/vodic_ico.png";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  document.title = getHeaderName(pathname);
  function getHeaderName(pathname) {
    if (pathname === "/publisher") {
      return "Metadata publisher";
    } else {
      return "Metadata finder";
    }
  }
  const handleRedirect = (e) => {
    e.preventDefault();
    // window.location.assign(host + "/" + homePage);
    // window.location.location = srcHost + "/" + homePage;
    navigate("/" + homePage);
  };
  return (
    <div className={headerStyle["header__container"]}>
      <div className={headerStyle["header"]}>
        <div className={headerStyle["header__wrapper"]}>
          <div className={headerStyle["header__left"]}>
            <a
              href=""
              className={headerStyle["header__logo"]}
              onClick={(e) => handleRedirect(e)}
            >
              <div className={headerStyle["header-logo__mask"]}></div>
              <img src={srcHost + logoImg} alt="logo vodic" />
            </a>
            <div className={headerStyle["header-title"]}>
              <div className={headerStyle["header-title__mask"]}></div>
              <div className={headerStyle["header-title__organization-text"]}>
                <h1 className={headerStyle["header-title__organization"]}>
                  {getHeaderName(pathname)}
                </h1>
                <p className={headerStyle["header-title__name"]}>
                  Trung tâm Thông tin dữ liệu Biển, hải đảo Quốc gia
                </p>
              </div>
            </div>
          </div>
          <div className={headerStyle["header__right"]}>
            <HeaderRightMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
