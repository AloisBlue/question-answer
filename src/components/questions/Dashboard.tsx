import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FC, useEffect, useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IFilter } from "../../models/Common";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, sendAnswer } from "../../store/actions/question";
import { loadQuestions } from "../../store/reducers/question";
import { Answer } from "../../models/Question";


const Dashboard: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const questions = useSelector(loadQuestions);
    
    const [opennedQuestion, setOpennedQuestion] = useState(0);
    const [view, setView] = useState(true);
    const [activeFilter, setActiveFilter] = useState('recent-questions');
    const [state, setState] = useState<Answer>({
        answer: ''
    });
    const [errors, setErrors] = useState({
        type: '',
        message: ''
    })

    useEffect(() => {
        dispatch(getQuestions());
    }, []);

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
                        filters.map((filter, i) => (
                            <li key={i} className={`${activeFilter === `${filter.variation}` && 'active-li'}`} onClick={() => setActiveFilter(filter.variation)}>{filter.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="questions">
                {
                    questions && questions?.length > 0 && questions.map((question, i) => (
                        <div key={i} className="wrap-quiz">
                            <div className="user">
                                <div className="pic">
                                    <img src={question?.user?.avatar} alt="" />
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
                                        <h5>{question.title}</h5>
                                        <h5 className="view" onClick={() => navigate(`/view-question/${question._id}`)}>View</h5>
                                    </div>
                                </div>
                                <div className="others">
                                    <div className="question">
                                        <p>{question.question}</p>
                                    </div>
                                    <div className="operations">
                                        <div className="common">
                                            <button
                                                onClick={() => navigate(`/view-question/${question._id}`)}
                                            >
                                                <FontAwesomeIcon className="icon t-answer" icon={faMessage} />
                                                <span>{question?.answers?.length} answer(s)</span>
                                            </button>
                                        </div>
                                        <div className="to-answer">
                                            <button
                                                onClick={() => {
                                                    setOpennedQuestion(i);
                                                    setView(!view)
                                                }}
                                            >
                                                {view && opennedQuestion === i ? 'Cancel' : 'Answer'}
                                            </button>
                                        </div>
                                    </div>
                                    {
                                        view && opennedQuestion === i && (
                                            <div className="send-answer">
                                                <form>
                                                    <textarea
                                                        placeholder="Please provide your answer"
                                                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                                                            setState({
                                                                answer: e.target.value
                                                            });
                                                            setErrors({
                                                                type: '',
                                                                message: ''
                                                            });
                                                        }}
                                                    >
                                                    </textarea>
                                                    {
                                                        errors.type === 'answer' && (
                                                            <small>{errors.message}</small>
                                                        )
                                                    }
                                                    <div className="centered">
                                                        <input type="submit" value="Answer" onClick={(e: FormEvent) => {
                                                            e.preventDefault();
                                                            
                                                            if (state.answer === '') {
                                                                return setErrors({
                                                                    type: 'answer',
                                                                    message: 'Please input your answer'
                                                                })
                                                            }
                                                            dispatch(sendAnswer(question._id!, state, toast, setOpennedQuestion));
                                                        }} />
                                                    </div>
                                                </form>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Dashboard;