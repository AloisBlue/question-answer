import profileApi from "../../api/profile";
import { IProfile } from "../../models/Profile";
import { GET_PROFILE } from "../types";
import { usersLoading } from "./auth";
import { errorsSetter } from "./errors";


const profileAction = (data: IProfile) => ({
  type: GET_PROFILE,
  payload: data
});

export const getProfile = () => async (dispatch: Function) => {
  dispatch(usersLoading());
  try {
    let resp = await profileApi.getProfile();

    dispatch(profileAction(resp));
  } catch (error) {
    dispatch(errorsSetter(error));
  }
}