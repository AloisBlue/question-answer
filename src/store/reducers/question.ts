import { RootState } from ".";
import { questionActionsTypes } from "../actions/actionTypes";
import { ASK_QUESTION, GET_QUESTION, GET_QUESTIONS, SEND_ANSWER, SEND_COMMENT } from "../types";
import { questionReducerType } from "./reducerTypes";

const initialState: questionReducerType = {
    question: null,
    questions: null,
    answer: null,
    comment: null
};

const questionReducer = (state = initialState, action: questionActionsTypes): questionReducerType => {
    const { type, payload } = action;
    switch (type) {
      case ASK_QUESTION:
        return {
          ...state,
          question: payload
        };
      case GET_QUESTIONS:
        return {
          ...state,
          questions: payload
        }
      case SEND_ANSWER:
        return {
          ...state,
          answer: payload
        }
      case GET_QUESTION:
        return {
          ...state,
          question: payload
        }
      case SEND_COMMENT:
        return {
          ...state,
          comment: payload
        }
      default:
        return state;
    }
};

export default questionReducer;
export const loadQuestions = (state: RootState) => state.questionReducer.questions;
export const loadQuestion = (state: RootState) => state.questionReducer.question;
