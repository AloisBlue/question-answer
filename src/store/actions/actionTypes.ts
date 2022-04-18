import { LOGIN_USER, LOADING, SIGNUP_USER, ERRORS, LOGOUT_USER } from "../types";
import { ILogin, ISignup, IDecoded } from "../../models/User";


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

// all exports goes here
export type authActionsTypes = login | loading | signup | errors | logout;
export type errorsActionsTypes = errors ;