import { ALogIn, ALogOut } from "../store/user";
import store from "../store/store";

const USER_INFO = "userInfo";
const AuthenticationProvider = () => {
  const userInfo = window.localStorage.getItem(USER_INFO);
  const logIn = (payload) => {
    store.dispatch(
      ALogIn({
        userEmail: payload.userEmail,
        userId: payload.userId,
        userName: payload.userName,
      })
    );
  };
  const logOut = () => {
    window.localStorage.removeItem(USER_INFO);
    store.dispatch(ALogOut());
    window.location.reload();
  };
  const checkAuthentication = () => {
    if (userInfo) {
      const { userEmail, userName, userId } = JSON.parse(userInfo);
      return logIn({
        userEmail,
        userId,
        userName,
      });
    }
  };
  return {
    USER_INFO,
    checkAuthentication,
    logIn,
    logOut,
  };
};
export default AuthenticationProvider;
