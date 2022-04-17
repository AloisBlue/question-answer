import { ILogin, ISignup } from "../../models/User";


export type authReducerType = {
  user: ISignup | ILogin | null,
  isAuthenticated: boolean,
  loading: boolean
};

export type errorsReducerType = {
  errors: any
};