import headerRightMenuStyle from "./HeaderRightMenu.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const homePage = process.env.REACT_APP_HOMEPAGE;
const host = process.env.REACT_APP_SRC_HOST;

function HeaderRightMenuAppList(props) {
  const { isUserLoggedIn } = useSelector((state) => state.User);
  const { pathname } = useLocation();
  const nagigate = useNavigate();

  function getPathName() {
    return pathname;
  }
  function handleNavigate(path) {
    window.location.assign(host + "/" + homePage + "/" + path);
  }
  return (
    <div className={headerRightMenuStyle.mid}>
      <div className={headerRightMenuStyle.appListTitlle}>Ứng dụng:</div>
      <div className={headerRightMenuStyle.appList}>
        <button
          disabled={!isUserLoggedIn}
          onClick={() => handleNavigate(`publisher`)}
          className={
            getPathName() === "/publisher"
              ? `${headerRightMenuStyle.appItem} ${headerRightMenuStyle.appItemActive}`
              : `${headerRightMenuStyle.appItem}`
          }
          title="Metadata Publisher"
        >
          <i className="fa-solid fa-cloud-arrow-up"></i>
        </button>
        <button
          onClick={() => handleNavigate("")}
          className={
            getPathName() === "/" || getPathName() === "/search"
              ? `${headerRightMenuStyle.appItem} ${headerRightMenuStyle.appItemActive}`
              : `${headerRightMenuStyle.appItem}`
          }
          title="Metadata Finder"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button
          className={headerRightMenuStyle.appItem}
          title="Some other app..."
        >
          <i className="fa-solid fa-location-dot"></i>
        </button>
      </div>
    </div>
  );
}

export default HeaderRightMenuAppList;
