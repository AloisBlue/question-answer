import { FC } from "react"
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

const LayoutWrapper:FC = ({ children }) => {
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
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutWrapper;