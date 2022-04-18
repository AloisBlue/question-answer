import React, { FC, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Paths from "./Paths";
import Landing from "../components/layout/Landing";
import Signup from "../components/auth/Signup"
import Signin from "../components/auth/Signin"
import UserWrap from "./UserRoute";
import GuestWrap from "./GuestRoute";
import Dashboard from "../components/questions/dashboard";
import Profile from "../components/user/Profile";


const Index: FC = () => {    
    return (
        <Routes>
            <Route path={Paths.landing} element={<Landing />} />
            <Route path={Paths.auth.signup} element={<GuestWrap component={<Signup />} />} />
            <Route path={Paths.auth.signin} element={<GuestWrap component={<Signin />} />} />
            <Route path={Paths.questions.dashboard} element={<UserWrap component={<Dashboard />} />} />
            <Route path={Paths.user.profile} element={<UserWrap component={<Profile />} />} />
        </Routes>
    )
}

export default Index;