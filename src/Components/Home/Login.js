import "../styles/Login.css";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { messageService } from "./messageService";
function Login() {
    const [emailErrorMsg, setEmailErrorMsg] = useState(null);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const navigate = useNavigate();
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);
    const {register,handleSubmit,formState: { errors } } = useForm();
    const loginUser = (formData) => {
        axios.post('http://localhost:3001/v1/users/login', formData).then(response => {
            if (response.data?.data) {
                localStorage.setItem('userInfo', JSON.stringify(response.data.data));
                messageService.SendMessage(true);
                navigate('/');
            }
        }).catch(error => {
            if (error.response.data?.errorDescription) {
                if (error.response.data.errorDescription === 'Email is not registered') {
                    setEmailErrorMsg('Email is not registered');
                } else {
                    setPasswordErrorMsg('Incorrect password');
                }
            }
            // console.log(error);
        });
    };
    return (
        <div className="container login">
            <div className="row">
                <div className="col form">
                    <h3>Login</h3>
                    <div className="inputBox">
                        <input className="input" type="email" placeholder="Enter Email" {...register("email", { required: true })} />
                        {errors.email?.type === 'required' && <p className="errormsg">Email is required</p>}
                        {emailErrorMsg && <p className="errormsg">{emailErrorMsg}</p>}
                    </div>
                    <div className=" inputBox eye">
                        <input className="input" type={showLoginPassword ? "text" : "password"} placeholder="Enter password" {...register("password", { required: true })}/>
                        {errors.password?.type === 'required' && <p className="errormsg">password is required</p>}
                        {passwordErrorMsg && <p className="errormsg">{passwordErrorMsg}</p>}
                        <i class="fa-regular fa-eye" onClick={() => setShowLoginPassword(!showLoginPassword)} aria-label={showLoginPassword ? "Hide Password" : "Show Password"}></i>
                    </div>
                    <div className="row remember">
                        <div className="col checkbox">
                            <label><input className="check"type="checkbox" />Remember me</label>
                        </div>
                        <div className="col rememberme">
                            <a>Forgot Password?</a>
                        </div>
                    </div>
                    <button onClick={handleSubmit(loginUser)} className="btn btn-primary">Login</button>
                    <p>Don't have on acount ? <Link to='/register'>register</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login;






