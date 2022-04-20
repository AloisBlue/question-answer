import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faMessage, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { FC, useState } from "react";
import { IFilter } from "../../models/Common";

const Dashboard: FC = () => {
    const [activeFilter, setActiveFilter] = useState('recent-questions')

    const filters: IFilter[] = [
        {
            name: 'Recent Questions',
            variation: 'recent-questions'
        },
        {
            name: 'Most Answers',
            variation: 'most-answers'
        }
    ]
    return(
        <div className="dashboard">
            <div className="header">
                <ul>
                    {
                        filters.map(filter => (
                            <li className={`${activeFilter === `${filter.variation}` && 'active-li'}`} onClick={() => setActiveFilter(filter.variation)}>{filter.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="questions">
                <div className="wrap-quiz">
                    <div className="user">
                        <div className="pic">
                            <img src="http://www.gravatar.com/avatar/c03ae64e3d6dca49a7a4e715fed9e2b5?s=200&r=pg&d=mm" alt="s" />
                        </div>
                        <div className="count">
                            <FontAwesomeIcon className="icon" icon={faCaretUp} />
                            <p>12</p>
                            <FontAwesomeIcon className="icon" icon={faCaretDown} />
                        </div>
                    </div>
                    <div className="details">
                        <div className="title">
                            <div className="small">
                                <small>Asked: March 28, 2019</small>
                            </div>
                            <div className="quiz-title">
                                <h5>Is five years old supposed to...</h5>
                                <h5 className="view">View</h5>
                            </div>
                        </div>
                        <div className="others">
                            <div className="question">
                                <p>description<br />description<br />description<br /></p>
                            </div>
                            <div className="operations">
                                <div className="common">
                                    <button><FontAwesomeIcon className="icon" icon={faMessage} /><span>14 answers</span></button>
                                    <button><FontAwesomeIcon className="icon t-up" icon={faThumbsUp} /><span>14 likes</span></button>
                                    <button><FontAwesomeIcon className="icon t-down" icon={faThumbsDown} /><span>14 dislikes</span></button>
                                </div>
                                <div className="to-answer">
                                    <button>Answer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrap-quiz">
                    <div className="user">
                        <div className="pic">
                            <img src="http://www.gravatar.com/avatar/c03ae64e3d6dca49a7a4e715fed9e2b5?s=200&r=pg&d=mm" alt="s" />
                        </div>
                        <div className="count">
                            <FontAwesomeIcon className="icon" icon={faCaretUp} />
                            <p>12</p>
                            <FontAwesomeIcon className="icon" icon={faCaretDown} />
                        </div>
                    </div>
                    <div className="details">
                        <div className="title">
                            <div className="small">
                                <small>Asked: March 28, 2019</small>
                            </div>
                            <div className="quiz-title">
                                <h5>Is five years old supposed to...</h5>
                                <h5 className="view">View</h5>
                            </div>
                        </div>
                        <div className="others">
                            <div className="question">
                                <p>description<br />description<br />description<br /></p>
                            </div>
                            <div className="operations">
                                <div className="common">
                                    <button><FontAwesomeIcon className="icon" icon={faMessage} /><span>14 answers</span></button>
                                    <button><FontAwesomeIcon className="icon t-up" icon={faThumbsUp} /><span>14 likes</span></button>
                                    <button><FontAwesomeIcon className="icon t-down" icon={faThumbsDown} /><span>14 dislikes</span></button>
                                </div>
                                <div className="to-answer">
                                    <button>Answer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;