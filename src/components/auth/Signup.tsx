import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validator from "validator";
import { signupUser } from "../../store/actions/auth";
import { getErrors } from "../../store/reducers/errors";


const Signup: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const respErrors = useSelector(getErrors);    

    const [state, setState] = useState({
        userName: '',
        email: '',
        password: '',
        termsAgreed: false
    });

    const [confirmPassword, setConfirmPassword] = useState<string>('');

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
        
        if (state.userName === '') {
            return setError({
                type: 'userName',
                message: 'Please provide the user name field'
            })    
        }

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

        if (state.password !== confirmPassword) {
            return setError({
                type: 'confirmPassword',
                message: 'The password and confirm password must match'
            })    
        }

        if (!state.termsAgreed) {
            return setError({
                type: 'termsAgreed',
                message: 'Please confirm you have agreed to terms & conditions'
            })    
        }
        
        dispatch(signupUser(state, navigate, toast))
    }

    return(
        <div className="auth-wrap">
            <div className="content-sect">
                <div className="left">
                    <div className="left-background">
                        <div className="centered">
                            <div className="title">
                                <h4>Sign Up</h4>
                            </div>
                            <div className="description">
                                <p>Sign up to ask any IT questions and search for already answered questions with detailed discussions</p>
                            </div>
                            <div className="button">
                                <Link className="btn-link" to="/signin">Have an account? Sign in</Link>
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
                                <label htmlFor="userName">Username</label>
                                <input
                                    id="userName"
                                    placeholder="Username"
                                    name="userName"
                                    type="text"
                                    value={state.userName?.toString()}
                                    onChange={onChange}
                                />
                                
                           </div>
                           {
                            error.type === 'userName' && <small className="error">{error.message}</small>
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
                            <div className="s-input">
                                <label htmlFor="confirmpassword">Confirm Password</label>
                                <input
                                    id="confirm-password"
                                    placeholder="Confirm password"
                                    name="confirm-password"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            {
                            error.type === 'confirmPassword' && <small className="error">{error.message}</small>
                           }
                            <div className="s-check">
                                <input
                                    id="termsAgreed"
                                    name="termsAgreed"
                                    type="checkbox"
                                    checked={state.termsAgreed}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {                                        
                                        setState({
                                            ...state,
                                            termsAgreed: e.target.checked
                                        });
                                    }}
                                />
                                <label htmlFor="terms">I Agree to <Link className="terms-link" to="/terms">Terms & Conditions</Link></label>
                            </div>
                            {
                            error.type === 'termsAgreed' && <small className="error">{error.message}</small>
                           }
                            <div className="s-submit">
                                <input type="submit" value="Signup" />
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

export default Signup;