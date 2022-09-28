const initialValue = {
  userEmail: "",
  userId: "",
  userName: "",
  isUserLoggedIn: false,
};

const LOGIN = "login";
const LOGOUT = "logout";

const ALogIn = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};
const ALogOut = () => {
  return {
    type: LOGOUT,
  };
};

const UserReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        userEmail: action.payload.userEmail,
        userId: action.payload.userId,
        userName: action.payload.userName,
        isUserLoggedIn: true,
      };
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export { UserReducer, ALogIn, ALogOut };
