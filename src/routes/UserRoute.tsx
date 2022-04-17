import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import Paths from "./Paths";

interface IProps {
    component: any;
}

const UserRoute = ({ component: Component, ...rest}: IProps) => {
    const isAuthenticated = useAuth();
    
    return isAuthenticated ? <Component /> : <Navigate to={Paths.auth.signin} />
};


const UserWrap = ({ component: Component }: any) => {
    const isAuthenticated = useAuth();
    
    return (
        <div>
            {
                isAuthenticated ? Component : <Navigate to={Paths.auth.signin} />
            }
        </div>
    )
};


export default UserWrap;
