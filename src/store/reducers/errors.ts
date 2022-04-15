import { RootState } from ".";
import { errorsActionsTypes } from "../actions/actionTypes";
import { ERRORS } from "../types";
import { errorsReducerType } from "./reducerTypes";

const initialState: errorsReducerType = {
    errors: null
};

const errorsReducer = (state = initialState, action: errorsActionsTypes): errorsReducerType => {
    const { type, payload } = action;
    switch (type) {
      case ERRORS:
        return {
          ...state,
          errors: payload
        };
      default:
        return state;
    }
};

export default errorsReducer;
export const getErrors = (state: RootState) => state.errorsReducer.errors;
