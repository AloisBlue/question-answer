import { LOGIN_USER, LOADING, SIGNUP_USER, ERRORS } from "../types";
import { ILogin, ISignup } from "../../models/User";


// auth interfaces
interface login {
  type: typeof LOGIN_USER;
  payload: ILogin;
}

interface signup {
  type: typeof SIGNUP_USER;
  payload: ISignup;
}

// loading interfaces
interface loading {
  type: typeof LOADING;
  payload: null
}

interface errors {
  type: typeof ERRORS,
  payload: any
}

// all exports goes here
export type authActionsTypes = login | loading | signup | errors ;
export type errorsActionsTypes = errors ;