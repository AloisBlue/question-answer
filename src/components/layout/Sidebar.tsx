import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { logoutUser } from "../../store/actions/auth";
import { useDispatch } from "react-redux";


const Sidebar:FC = () => {
    const dispatch = useDispatch();
    
    return (
        <>
            <div className="topper">
                <p className="logo-image">Q <span className="white-span">&</span> A</p>
            </div>
            <div className="others">
                <div className="links">
                    <ul>
                        <li className="normal-link"><span className="icon"><FontAwesomeIcon className="f-icon" icon={faArrowRightFromBracket} /></span><span className="name">Logout</span></li>
                    </ul>
                </div>
                <div className="footer">
                    <ul>
                        <li className="normal-link" onClick={() => dispatch(logoutUser())}><span className="icon"><FontAwesomeIcon className="f-icon" icon={faArrowRightFromBracket} /></span><span className="name">Logout</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;