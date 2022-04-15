import { LOGIN_USER, LOADING, SIGNUP_USER } from "../types";
import authApi from "../../api/auth";
import { ILogin, ISignup } from "../../models/User";
import setAuthToken from "../../utils/setAuthToken";
import { errorsSetter } from "./errors";
import Paths from "../../routes/Paths";


const loginUserAction = (data: ILogin) => ({
  type: LOGIN_USER,
  payload: data
});

const usersLoading = () => ({
  type: LOADING
});

const signupUserAction = (data: ISignup) => ({
  type: SIGNUP_USER,
  payload: data
});

export const loginUser = (user: ILogin) => async (dispatch: Function) => {
  dispatch(usersLoading());
  try {
    let resp = await authApi.login(user)
      
    let token = resp.token

    localStorage.setItem('developerToken', token);
    setAuthToken(token)
    dispatch(loginUserAction(resp));
  } catch (error) {
    dispatch(errorsSetter(error))
  }
}

export const signupUser = (user: ISignup, navigate: Function, toast: any) => async (dispatch: Function) => {
  dispatch(usersLoading());
  try {
    let resp = await authApi.signup(user)

    dispatch(signupUserAction(resp));
    navigate(Paths.signin);
    toast.success(resp.message, {
      icon: "🚀"
    });
  } catch (error) {
    dispatch(errorsSetter(error))
  }
}

