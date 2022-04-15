import { ILogin, ISignup } from "../../models/User";


export type authReducerType = {
  user: ISignup | ILogin | null,
  loading: boolean
};

export type errorsReducerType = {
  errors: any
};