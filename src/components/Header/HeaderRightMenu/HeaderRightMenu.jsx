import React, { useState } from "react";
import HeaderRightMenuNotLoggedIn from "./HeaderRightMenuNotLoggedIn";
import HeaderRightMenuLoggedIn from "./HeaderRightMenuLoggedIn";
import headerRightMenuStyle from "./HeaderRightMenu.module.css";
import { connect, useSelector } from "react-redux";
import HeaderRightMenuAppList from "./HeaderRightMenuAppList";
import AuthenticationProvider from "../../../ultils/AuthenticationProvider";

const HeaderRightMenu = () => {
  const { isUserLoggedIn } = useSelector((state) => state.User);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (isUserLoggedIn) {
      const { logOut } = AuthenticationProvider();
      logOut();
    }
  };
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={headerRightMenuStyle.menuWrapper}>
        <div
          className={headerRightMenuStyle["header__rightIcon"]}
          onClick={() => handleShow()}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        {show && (
          <div className={headerRightMenuStyle.menu}>
            {!isUserLoggedIn ? (
              <HeaderRightMenuNotLoggedIn />
            ) : (
              <HeaderRightMenuLoggedIn />
            )}

            <HeaderRightMenuAppList />
            {isUserLoggedIn && (
              <div className={headerRightMenuStyle.bottom}>
                <button
                  className={headerRightMenuStyle.button}
                  onClick={() => handleClick()}
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderRightMenu;
