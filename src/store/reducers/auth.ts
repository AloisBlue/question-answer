import { authActionsTypes } from "../actions/actionTypes";
import { SIGNUP_USER, LOGIN_USER, LOADING } from "../types";
import { authReducerType } from "./reducerTypes";

const initialState: authReducerType = {
    user: null,
    isAuthenticated: false,
    loading: true
};

const authReducer = (state = initialState, action: authActionsTypes): authReducerType => {
    const { type, payload } = action;
    switch (type) {
      case SIGNUP_USER:
        return {
          ...state,
          user: payload,
          isAuthenticated: false,
          loading: false
        };
      case LOGIN_USER:
        return {
          ...state,
          user: payload,
          isAuthenticated: true,
          loading: false
        };
      case LOADING:
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          loading: true
        };
      default:
        return state;
    }
};

export default authReducer;
