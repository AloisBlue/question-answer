import { combineReducers } from "redux";
import authReducer from "./auth";
import errorsReducer from "./errors";

const rootReducer = combineReducers({
  authReducer,
  errorsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer };
