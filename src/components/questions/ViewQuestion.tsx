import { faCheckCircle, faMessage, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getQuestion, sendComment } from "../../store/actions/question";
import { loadQuestion } from "../../store/reducers/question";


const ViewQuestion:FC = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const question = useSelector(loadQuestion);

    const [opennedComment, setOpennedComment] = useState(0);
    const [view, setView] = useState(true);
    const [state, setState] = useState({
        comment: ''
    });
    const [errors, setErrors] = useState({
        type: '',
        message: ''
    })

    useEffect(() => {
        const { id } =  params;

        dispatch(getQuestion(id!))
    }, []);
    
    return(
        <div className="view-question">
            {
                question && (
                    <>
                        <div className="user">
                            <div className="details">
                                <img src={question.user?.avatar} alt="" />
                                <small>
                                    <span className="span1">{question.user?.userName}</span>
                                    <span className="span2">Joined: March 28, 2019</span>
                                </small>
                            </div>
                            <div className="time">
                                <p>Asked: March 28, 2019</p>
                            </div>
                        </div>
                        <div className="padding">
                            <div className="question">
                                <h4>{question.title}</h4>
                                <p>{question.question}</p>
                            </div>
                            {
                                question.answers! && question.answers.length > 0 && (
                                    <div className="answers">
                                        {
                                            question.answers.map((answer, i) => (
                                                <div key={i} className="answer">
                                                    <p>{answer.answer}</p>
                                                    <div className="operations">
                                                        <div className="tools">
                                                            <span className="span"><FontAwesomeIcon className="check-icon t-check" icon={faCheckCircle} /></span>
                                                            <button
                                                                onClick={() => {
                                                                    setOpennedComment(i);
                                                                    setView(!view)
                                                                }}
                                                                >
                                                                <FontAwesomeIcon className="icon t-comment" icon={faMessage} />
                                                                <span>{answer.comments?.length} comment(s)</span>
                                                            </button>
                                                            <button
                                                                >
                                                                <FontAwesomeIcon className="icon t-up" icon={faThumbsUp} />
                                                                <span>{answer.upvote?.length} upvote(s)</span>
                                                            </button>
                                                            <button
                                                            >
                                                                <FontAwesomeIcon className="icon t-down" icon={faThumbsDown} />
                                                                <span>{answer.downvote?.length} downvote(s)</span>
                                                            </button>
                                                        </div>
                                                        <div className="to-comment">
                                                            <button
                                                                onClick={() => {
                                                                    setOpennedComment(i);
                                                                    setView(!view)
                                                                }}
                                                            >
                                                                {view && opennedComment === i ? 'Cancel' : 'Comment'}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {
                                                        view && opennedComment === i && (
                                                            <div className="send-comment">
                                                                <form>
                                                                    <textarea
                                                                        placeholder="Please provide your comment"
                                                                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                                                                            setState({
                                                                                comment: e.target.value
                                                                            });
                                                                            setErrors({
                                                                                type: '',
                                                                                message: ''
                                                                            });
                                                                        }}
                                                                    >
                                                                    </textarea>
                                                                    
                                                                    {
                                                                        errors.type === 'comment' && (
                                                                            <small>{errors.message}</small>
                                                                        )
                                                                    }
                                                                    <div className="centered">
                                                                        <input type="submit" value="Comment" onClick={(e: FormEvent) => {
                                                                            e.preventDefault();
                                                                            
                                                                            if (state.comment === '') {
                                                                                return setErrors({
                                                                                    type: 'comment',
                                                                                    message: 'Please input your comment'
                                                                                })
                                                                            }

                                                                            dispatch(sendComment(answer.question!, answer._id!, state, toast, setState));
                                                                        }} />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                            )}
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ViewQuestion;