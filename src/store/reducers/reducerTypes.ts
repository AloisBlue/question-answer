import { IProfile } from "../../models/Profile";
import { Answer, Comment, Question } from "../../models/Question";
import { ILogin, ISignup } from "../../models/User";


export type authReducerType = {
  user: ISignup | ILogin | null,
  isAuthenticated: boolean,
  loading: boolean
};

export type errorsReducerType = {
  errors: any
};

export type profileReducerType = {
  user: IProfile | null,
};

export type questionReducerType = {
  question: Question | null,
  questions: Question[] | null
  answer: Answer | null,
  comment: Comment | null
};