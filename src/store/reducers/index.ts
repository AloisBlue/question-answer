import { combineReducers } from "redux";
import authReducer from "./auth";
import errorsReducer from "./errors";
import profileReducer from "./profile";
import questionReducer from "./question";


const rootReducer = combineReducers({
  authReducer,
  errorsReducer,
  profileReducer,
  questionReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer };
