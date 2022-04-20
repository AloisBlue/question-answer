import { combineReducers } from "redux";
import authReducer from "./auth";
import errorsReducer from "./errors";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  authReducer,
  errorsReducer,
  profileReducer
  
});

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer };
