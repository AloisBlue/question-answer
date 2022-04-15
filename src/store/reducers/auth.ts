import { authActionsTypes } from "../actions/actionTypes";
import { LOGIN_USER, LOADING } from "../types";
import { authReducerType } from "./reducerTypes";

const initialState: authReducerType = {
    user: null,
    // isLoggedIn: false,
    loading: true
};

const authReducer = (state = initialState, action: authActionsTypes): authReducerType => {
    const { type, payload } = action;
    switch (type) {
      case LOGIN_USER:
        return {
          ...state,
          user: payload,
          //isLoggedIn: true,
          loading: false
        };
      case LOADING:
        return {
          ...state,
          user: null,
          //isLoggedIn: false,
          loading: true
        };
      default:
        return state;
    }
};

export default authReducer;
