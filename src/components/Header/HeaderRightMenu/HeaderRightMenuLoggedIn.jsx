import React from "react";
import headerRightMenuStyle from "./HeaderRightMenu.module.css";
import { connect } from "react-redux";

class HeaderRightMenuLoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { userName, userId, userEmail } = this.props;
    return (
      <div className={headerRightMenuStyle.top}>
        <div className={headerRightMenuStyle.userIcon}>
          <i
            className={`fa-regular fa-user ${headerRightMenuStyle.userIconSVG}`}
          ></i>
        </div>
        <div className={headerRightMenuStyle.userInfo}>
          <p className={headerRightMenuStyle.userName}>{userName}</p>
          <p className={headerRightMenuStyle.userId}>ID: {userId}</p>
          <button className={headerRightMenuStyle.button}>
            <i className="fa-solid fa-gear"></i>
            Thông tin tài khoản
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(fullState) {
  return fullState.User;
}
export default connect(mapStateToProps, null)(HeaderRightMenuLoggedIn);
