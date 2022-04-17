import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import Paths from "./Paths";


const GuestWrap = ({ component: Component }: any) => {
    const isAuthenticated = useAuth();
    
    return (
        <div>
            {
                !isAuthenticated ? Component : <Navigate to={Paths.questions.dashboard} />
            }
        </div>
    )
};

export default GuestWrap
