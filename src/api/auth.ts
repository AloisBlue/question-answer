import axios from "axios";
import { ILogin, ISignup } from "../models/User";

const baseUrl = "";

const authApi = {
  login: async (user: ILogin) => {
    let res = await axios.post(`${baseUrl}/api/users/login`, { payload: user });
    return res.data;
  },
  signup: async (user: ISignup) => {
    let res = await axios.post(`${baseUrl}/api/users/signup`, { payload: user });
    return res.data;
  }
}

export default authApi;
