import { Navigate } from "react-router-dom";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import { useAuth } from "../hooks/auth";
import Paths from "./Paths";


const UserWrap = ({ component: Component }: any) => {
    const isAuthenticated = useAuth();
    
    return (
        <div>
            {
                isAuthenticated ? (
                    // Add the layout styles here; sidebar & appbar
                    <LayoutWrapper>
                        {Component}
                    </LayoutWrapper>
                )
                 : (
                    <Navigate to={Paths.auth.signin} />
                 )
            }
        </div>
    )
};


export default UserWrap;
