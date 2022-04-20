import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ILink } from "../../models/Common";
import Paths from "../../routes/Paths";
import { useNavigate } from "react-router-dom";


const Appbar: FC = () => {
    const navigate = useNavigate();

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
                    <div className="credentials">
                        <div className="image">
                            <img />
                        </div>
                        <div className="details">
                            <small>Logged in as</small>
                            <p>Alois Blue</p>
                        </div>
                    </div>
                    {/* <div className="drop-down">
                        <small>icon</small>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Appbar;