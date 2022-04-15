import { ERRORS } from "../types";


const errorsAction = (error: any) => ({
  type: ERRORS,
  payload: error.response.data
});

export const errorsSetter = (data: any) => async (dispatch: Function) => {
  dispatch(errorsAction(data))
}