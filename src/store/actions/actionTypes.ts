import { LOGIN_USER, LOADING, SIGNUP_USER, ERRORS, LOGOUT_USER, GET_PROFILE, ASK_QUESTION, GET_QUESTIONS, SEND_ANSWER, GET_QUESTION, SEND_COMMENT } from "../types";
import { ILogin, ISignup } from "../../models/User";
import { Answer, Comment, Question } from "../../models/Question";


// auth interfaces
interface login {
  type: typeof LOGIN_USER;
  payload: ILogin;
}

interface signup {
  type: typeof SIGNUP_USER;
  payload: ISignup;
}

interface logout {
  type: typeof LOGOUT_USER;
  payload: null
}

// loading interfaces
interface loading {
  type: typeof LOADING;
  payload: null
}

// error interfaces
interface errors {
  type: typeof ERRORS,
  payload: any
}

// profile interfaces
interface profile {
  type: typeof GET_PROFILE,
  payload: any
}

// question interfaces
interface question {
  type: typeof ASK_QUESTION | typeof GET_QUESTION,
  payload: Question
}

interface questions {
  type: typeof GET_QUESTIONS,
  payload: Question[]
}

interface answer {
  type: typeof SEND_ANSWER,
  payload: Answer
}

interface comment {
  type: typeof SEND_COMMENT,
  payload: Comment
}

// all exports goes here
export type authActionsTypes = login | loading | signup | logout;
export type errorsActionsTypes = errors ;
export type profileActionsTypes = profile;
export type questionActionsTypes = question | questions | answer | comment;