import { RootState } from ".";
import { profileActionsTypes } from "../actions/actionTypes";
import { GET_PROFILE } from "../types";
import { profileReducerType } from "./reducerTypes";

const initialState: profileReducerType = {
    user: null,
};

const profileReducer = (state = initialState, action: profileActionsTypes): profileReducerType => {
    const { type, payload } = action;
    switch (type) {
      case GET_PROFILE:
        return {
          ...state,
          user: payload,
        };
      default:
        return state;
    }
};

export default profileReducer;
export const loadProfile = (state: RootState) => state.profileReducer.user;

