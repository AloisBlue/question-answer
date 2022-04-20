import { questionActionsTypes } from "../actions/actionTypes";
import { ASK_QUESTION } from "../types";
import { questionReducerType } from "./reducerTypes";

const initialState: questionReducerType = {
    question: null,
};

const questionReducer = (state = initialState, action: questionActionsTypes): questionReducerType => {
    const { type, payload } = action;
    switch (type) {
      case ASK_QUESTION:
        return {
          ...state,
          question: payload
        };
      default:
        return state;
    }
};

export default questionReducer;
