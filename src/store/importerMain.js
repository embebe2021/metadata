import draftStateList from "./draftStateList";

const initialValue = {
  infoDuAn: {},
  infoDonViGiaoNop: {},
  listVanBanPhapLy: [],
  listDuLieu: [],
};

const UPDATE_DUAN = "update du an";
const UPDATE_DONVI = "update don vi";
const UPDATE_VANBANPHAPLY = "update van ban phap ly";
const ADD_DULIEU = "add DuLieu";
const DELETE_ALL = "delete all";

const aUpdateDuAn = (payload) => {
  return {
    type: UPDATE_DUAN,
    payload,
  };
};
const aUpdateDonVi = (payload) => {
  return {
    type: UPDATE_DONVI,
    payload,
  };
};
const aUpdateVanBanPhapLy = (payload) => {
  return {
    type: UPDATE_VANBANPHAPLY,
    payload,
  };
};
const aAddDuLieu = (payload) => {
  return {
    type: ADD_DULIEU,
    payload,
  };
};
const aClearAll = () => {
  return {
    type: DELETE_ALL,
  };
};
const ProgressReducer = (state = initialValue, action) => {
  switch (action.type) {
    case UPDATE_DUAN:
      return {
        ...state,
        infoDuAn: action.payload,
      };
    case UPDATE_DONVI: {
      return {
        ...state,
        infoDonViGiaoNop: action.payload,
      };
    }
    case UPDATE_VANBANPHAPLY: {
      return {
        ...state,
        listVanBanPhapLy: [...action.payload],
      };
    }
    case ADD_DULIEU: {
      return {
        ...state,
        listDuLieu: [...action.payload],
      };
    }
    case DELETE_ALL: {
      return initialValue;
    }
    default:
      return state;
  }
};
export {
  ProgressReducer,
  aUpdateDuAn,
  aUpdateDonVi,
  aUpdateVanBanPhapLy,
  aAddDuLieu,
  aClearAll,
};
