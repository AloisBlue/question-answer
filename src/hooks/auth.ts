import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

const getAuth = (state: RootState) => state.authReducer.isAuthenticated;

export const useAuth = () => useSelector(getAuth);
