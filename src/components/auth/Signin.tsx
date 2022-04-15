import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";
import { loginUser } from "../../store/actions/auth";
import { getErrors } from "../../store/reducers/errors";


const Signin: FC = () => {
    const dispatch = useDispatch();
    const respErrors = useSelector(getErrors);    

    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState({
        type: '',
        message: ''
    });

    const [globalErrors, setGlobalErrors] = useState<any>(null);

    useEffect(() => {
        if(respErrors) {
            setGlobalErrors(respErrors)         
        }
    }, [respErrors])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
        // reset errors
        setError({
            type: '',
            message: ''
        });
        setGlobalErrors(null);
    }

    const onSubmit = async(e: FormEvent) => {
        e.preventDefault();

        if (state.email === '') {
            return setError({
                type: 'email',
                message: 'Please provide the email field'
            })    
        }

        if (!validator.isEmail(state.email)) {
            return setError({
                type: 'email',
                message: 'Please provide a valid email address'
            })
        }

        if (state.password === '') {
            return setError({
                type: 'password',
                message: 'Please provide the password field'
            })    
        }
        
        dispatch(loginUser(state))
    }

    return(
        <div className="auth-wrap">
            <div className="content-sect">
                <div className="left">
                    <div className="left-background">
                        <div className="centered">
                            <div className="title">
                                <h4>Sign In</h4>
                            </div>
                            <div className="description">
                                <p>Login if you already have account to post questions and accept answers</p>
                            </div>
                            <div className="button">
                                <Link className="btn-link" to="/signup">No account? Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="form">
                        <form onSubmit={onSubmit}>
                            {
                                globalErrors && globalErrors.errors.global &&
                                <div className="error-g">
                                    <small>{globalErrors.errors.global}</small>
                                </div>
                            }
                           <div className="s-input">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    placeholder="example@example.com"
                                    name="email"
                                    //type="email"
                                    value={state.email?.toString()}
                                    onChange={onChange}
                                />
                           </div>
                           {
                            error.type === 'email' && <small className="error">{error.message}</small>
                           }
                            <div className="s-input">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    placeholder="Your password"
                                    name="password"
                                    type="password"
                                    value={state.password?.toString()}
                                    onChange={onChange}
                                />
                            </div>
                            {
                            error.type === 'password' && <small className="error">{error.message}</small>
                           }                            
                            <div className="s-submit">
                                <input type="submit" value="Signin" />
                            </div>
                        </form>
                        {/* <div className="other">
                            <p>OR USE</p>
                            <div className="google">
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;