const initialValue = {
  searchData: [],
};
const UPDATE_DATA = "updateData";
const RESET_DATA = "removeData";

const aUpdateData = (payload) => {
  return {
    type: UPDATE_DATA,
    payload,
  };
};
const aResetData = () => {
  return {
    type: RESET_DATA,
  };
};
const mainSearchReducer = (state = initialValue, action) => {
  switch (action.type) {
    case UPDATE_DATA: {
      return {
        searchData: action.payload,
      };
    }
    case RESET_DATA: {
      return {
        searchData: initialValue,
      };
    }
    default:
      return state;
  }
};

export { mainSearchReducer, aUpdateData, aResetData };
