import React from "react";
import headerRightMenuStyle from "./HeaderRightMenu.module.css";
import debounce from "./../../../ultils/debounce";
import { sendData } from "../../../ultils/callApi";
import API from "../../../ultils/API";
import { connect } from "react-redux";
import AuthenticationProvider from "../../../ultils/AuthenticationProvider";
import { aActionOnClick, aActionSetLoaded } from "../../../store/loader";

class HeaderRightMenuNotLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        btnActive: false,
        value: "",
        isValid: false,
      },
      password: {
        btnActive: false,
        value: "",
      },
      isShowPasswordDiv: false,
      isShowNotice: false,
    };
  }
  setActiveBtn = debounce((type) => {
    const { value } = this.state[type];
    if (value.length > 0) {
      this.setState(
        (state) => ({
          [type]: {
            ...state[type],
            btnActive: true,
          },
        }),
        () => {}
      );
    }
  }, 300);
  componentWillUnmount() {
    this.setActiveBtn.cancel();
  }
  async handleSubmitUserInput(e, type) {
    e.preventDefault();
    const { btnActive, value } = this.state[type];
    const { ActionLoaderOnClick, ActionSetLoaded } = this.props;
    if (btnActive) {
      ActionLoaderOnClick();
      if (type === "email") {
        const { isValidEmail } = await sendData(API.authentication, {
          userEmail: value,
        });
        if (isValidEmail) {
          this.setState((state) => ({
            ...state,
            isShowPasswordDiv: true,
          }));
        } else {
          this.setState((state) => ({
            ...state,
            isShowNotice: true,
          }));
        }
      }
      if (type === "password") {
        const { email, password } = this.state;
        let { isUserLoggIn, isUserExist, userInfo } = await sendData(
          API.authentication,
          {
            userEmail: email.value,
            userPassword: password.value,
          }
        );
        ActionSetLoaded();
        if (isUserLoggIn === false || isUserExist === false) {
          this.setState((state) => ({
            ...state,
            isShowNotice: true,
          }));
        }
        if (isUserLoggIn && userInfo) {
          const { logIn, USER_INFO } = AuthenticationProvider();

          window.localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
          logIn({
            userEmail: userInfo.userEmail,
            userId: userInfo.userId,
            userName: userInfo.userName,
          });
        }
      }
    }
  }
  handleChange(value, type) {
    this.setState(
      () => {
        const x = {
          [type]: {
            btnActive: false,
            value,
          },
          isShowNotice: false,
        };
        if (type === "email") {
          return {
            ...x,
            password: {
              btnActive: false,
              value: "",
            },
            isShowPasswordDiv: false,
          };
        }
        return { ...x };
      },
      () => {
        this.setActiveBtn(type);
      }
    );
  }
  render() {
    const { isShowPasswordDiv, email, password, isShowNotice } = this.state;
    return (
      <div className={headerRightMenuStyle.top}>
        <h3 className={headerRightMenuStyle.signInTitle}>Đăng nhập</h3>
        <form className={headerRightMenuStyle.signInInfo}>
          <input
            onChange={(e) => this.handleChange(e.target.value, "email")}
            maxLength={100}
            type="text"
            placeholder="vodic@vodic.vn"
            className={headerRightMenuStyle.signInInfoInput}
          />
          <button
            type="submit"
            className={headerRightMenuStyle.signInInfoBtn}
            onClick={(e) => this.handleSubmitUserInput(e, "email")}
          >
            {email.btnActive && <i className="fa-solid fa-arrow-right"></i>}
          </button>
        </form>
        {isShowPasswordDiv && (
          <form className={headerRightMenuStyle.signInInfo}>
            <input
              onChange={(e) => this.handleChange(e.target.value, "password")}
              maxLength={100}
              type="text"
              placeholder="12345678"
              className={headerRightMenuStyle.signInInfoInput}
            />
            <button
              type="submit"
              className={headerRightMenuStyle.signInInfoBtn}
              onClick={(e) => this.handleSubmitUserInput(e, "password")}
            >
              {password.btnActive && (
                <i className="fa-solid fa-arrow-right"></i>
              )}
            </button>
          </form>
        )}

        {isShowNotice && (
          <div className={headerRightMenuStyle.notice}>
            Email hoặc mật khẩu khum đúng!
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(fullState) {
  return fullState.User;
}
function mapDispatchToProps(dispatch) {
  return {
    ActionLoaderOnClick: () => dispatch(aActionOnClick()),
    ActionSetLoaded: () => dispatch(aActionSetLoaded()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderRightMenuNotLoggedIn);
