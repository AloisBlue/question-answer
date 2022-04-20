import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faDashboard, IconDefinition, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { logoutUser } from "../../store/actions/auth";
import { useDispatch } from "react-redux";
import Paths from "../../routes/Paths";
import { useLocation, useNavigate } from "react-router-dom";
import { ILink } from "../../models/Common";

const Sidebar:FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const isActive: Function = (path: string) => {
        if (path === location.pathname) {
            return true;
        } else {
            return false;
        }
    }

    const links: ILink[] = [
        {
            name: 'Dashboard',
            icon: faDashboard,
            path: Paths.questions.dashboard
        },
        {
            name: 'Profile',
            icon: faUserCircle,
            path: Paths.user.profile
        }
    ];

    return (
        <>
            <div className="topper">
                <p className="logo-image">q<span className="white-span">&</span>a</p>
            </div>
            <div className="others">
                <div className="links">
                    <ul>
                        {
                            links.map((link, i) => (
                                <li key={i} className={`${isActive(link.path) ? 'active-link' : 'normal-link'}`} onClick={() => navigate(link.path)}><span className="icon"><FontAwesomeIcon className="f-icon" icon={link.icon!} /></span><span className="name">{link.name}</span></li>
                            ))
                        }
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