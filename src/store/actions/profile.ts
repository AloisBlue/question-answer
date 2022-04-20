import profileApi from "../../api/profile";
import { IProfile } from "../../models/Profile";
import { GET_PROFILE } from "../types";
import { errorsSetter } from "./errors";


const profileAction = (data: IProfile) => ({
  type: GET_PROFILE,
  payload: data
});

export const getProfile = () => async (dispatch: Function) => {
  try {
    let resp = await profileApi.getProfile();

    dispatch(profileAction(resp.userProfile));
  } catch (error) {
    dispatch(errorsSetter(error));
  }
}