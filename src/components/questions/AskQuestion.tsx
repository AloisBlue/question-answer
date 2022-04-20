import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Question } from "../../models/Question";
import { askQuestion } from "../../store/actions/question";


const AskQuestion: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = useState<Question>({
        title: '',
        question: ''
    });

    const [errors, setErrors] = useState({
        type: '',
        message: ''
    });

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors({
            type: '',
            message: ''
        })
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (state.title === '') {
            return setErrors({
                type: 'title',
                message: 'The title is required'
            })
        }

        if (state.question === '') {
            return setErrors({
                type: 'question',
                message: 'The question is required'
            })
        }

        // send the request
        dispatch(askQuestion(state, navigate, toast))
    }

    return(
        <div className="ask-question">
            <h5>
                Ask Your Question
            </h5>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <div className="input-div">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            placeholder="Please provide a title"
                            value={state.title}
                            onChange={onChange}
                        />
                        {
                            errors.type === 'title' && (
                                <small>{errors.message}</small>
                            )
                        }
                    </div>
                    <div className="input-div">
                        <label htmlFor="question">Question</label>
                        <textarea
                            id="question"
                            name="question"
                            placeholder="Please provide your question"
                            value={state.question}
                            onChange={onChange}
                        >
                        </textarea>
                        {
                            errors.type === 'question' && (
                                <small>{errors.message}</small>
                            )
                        }
                    </div>
                    <div className="submit-div">
                        <input
                            type="submit"
                            value="Submit Question"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AskQuestion;