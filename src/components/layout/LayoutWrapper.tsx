import { FC, useEffect } from "react"
import { useDispatch } from "react-redux";
import { getProfile } from "../../store/actions/profile";
import Content from "../content/Content";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

const LayoutWrapper:FC = ({ children }: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile())
    }, []);

    return (
        <div className="layout-wrapper">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="content-wrapper">
                <div className="appbar">
                    <Appbar />
                </div>
                <div className="children-wrapper">
                    {/* Add the content layout style here */}
                    <Content>
                        {children}
                    </Content>
                </div>
            </div>
        </div>
    )
}

export default LayoutWrapper;