import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ILink } from "../../models/Common";
import Paths from "../../routes/Paths";
import { loadProfile } from "../../store/reducers/profile";


const Appbar: FC = () => {
    const navigate = useNavigate();
    const profile = useSelector(loadProfile);
    
    const links: ILink[] = [
        {
            name: 'Dashboard',
            path: Paths.questions.dashboard
        },
        {
            name: 'About',
            path: Paths.appbar.about
        },
        {
            name: 'Career',
            path: Paths.appbar.career
        },
        {
            name: 'Contact',
            path: Paths.appbar.contact
        }
    ];

    return(
        <>
            <div className="appbar-content">
                <div className="center-content">
                    <div className="bar-links">
                        <div className="bar">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="links">
                            <ul>
                                {
                                    links.map((link, i) => (
                                        <li key={i} onClick={() => navigate(link.path)}>{link.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="search">
                        <input
                            placeholder="Search Questions"
                        />
                    </div>
                </div>
                <div className="right-content">
                    {
                        profile && (
                            <>
                                <div className="credentials">
                                    <div className="image">
                                        <img src={profile.avatar} alt=""/>
                                    </div>
                                    <div className="details">
                                        <small>Logged in as</small>
                                        <p>{profile.userName}</p>
                                    </div>
                                </div>
                                <div className="drop-down">
                                    <FontAwesomeIcon className="icon" icon={faChevronCircleDown} />
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Appbar;