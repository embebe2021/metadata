const initialValue = {
  isClick: false,
  isLoaded: false,
};

const SET_LOADING = "setLoading";
const SET_LOADED = "setLoaded";
const aActionOnClick = () => {
  return {
    type: SET_LOADING,
  };
};
const aActionSetLoaded = () => {
  return {
    type: SET_LOADED,
  };
};

const LoaderReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isClick: !state.isClick,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: !state.isLoaded,
      };
    default:
      return state;
  }
};
export { LoaderReducer, aActionOnClick, aActionSetLoaded };
