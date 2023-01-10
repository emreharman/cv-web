import actionTypes from "../actions/actionTypes";

const initialState = {
  start: false,
  success: false,
  user: null,
  fail: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.userActions.FETCH_USER_START:
      return {
        ...state,
        start: true,
      };
    case actionTypes.userActions.FETCH_USER_SUCCESS:
      return {
        ...initialState,
        success: true,
        user: action.payload,
      };
    case actionTypes.userActions.FETCH_USER_FAIL:
      return {
        ...initialState,
        fail: true,
        error: action.payload,
      };
    case actionTypes.userActions.UPDATE_USER_START:
      return {
        ...state,
        start: action.payload,
      };
    case actionTypes.userActions.UPDATE_USER_SUCCESS:
      return {
        ...initialState,
        success: true,
        user: action.payload,
      };
    case actionTypes.userActions.UPDATE_USER_FAIL:
      return {
        ...initialState,
        fail: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
