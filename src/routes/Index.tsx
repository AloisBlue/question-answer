import React, { FC } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Paths from "./Paths";
import Landing from "../components/layout/Landing";
import Signup from "../components/auth/Signup"
import Signin from "../components/auth/Signin"


const Index: FC = () => {
    const location = useLocation();
    
    return (
        <Routes>
            <Route path={Paths.landing} element={<Landing />} />
            <Route path={Paths.signup} element={<Signup />} />
            <Route path={Paths.signin} element={<Signin />} />
        </Routes>
    )
}

export default Index;