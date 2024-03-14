import '../styles/register.css';
import {useForm} from 'react-hook-form';
import { useState } from "react";
import React  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Register() {

        const [showPassword, setShowPassword] = useState(false);
        const [showRepeatPassword, setShowRepeatPassword] = useState(false);
        const navigate = useNavigate();
        const {register,handleSubmit,watch,formState: { errors } } = useForm();
        const passwordValue = watch("password","");
        const RegisterUser = (formData) => {
            axios.post('http://localhost:3001/v1/users/register', formData)
            .then(response => {
                console.log(response);
                navigate('/Login');
            })
            .catch(error => {
                // console.log(error);
                console.error("Registration Error:", error.response.status);
                console.error("Error Data:", error.response.data);
            });
 

        };
    return (
        <div className="outer-wrapper text-center">
            <div className="wrapper">
                <div>
                    <h1>Register</h1>
                    <div className="row-container">
                    <div className="input-box">
                        <input type="text" placeholder="Firstname" id="firstName" {...register("firstName", { required: true})}/> 
                        {errors.FirstName?.type === 'required' && <p className="errormsg">FirstName is required</p>}
                        
                        </div>
                    <div className="input-box">
                        <input type="text" placeholder="Lastname" id="lastName" {...register("lastName", { required: true })} /> 
                        {errors.lastName?.type === 'required' && <p className="error-msg">Lastname is mandatory</p>}
                    </div>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" id="email" {...register("email", {required: true})} />
                        {errors.email?.type === 'required' && <p className="error-msg">Email is mandatory</p>}
                        {errors.email?.type === 'pattern' && <p className="error-msg">Incorrect email format</p>}
                        <i class='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                    <input className="input" type={showPassword ? "text" : "password"} placeholder="Enter password" {...register("password", { required: true })}/>
                        {errors.password?.type === 'required' && <p className="errormsg">password is required</p>}
                        <i class="fa-regular fa-eye" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide Password" : "Show Password"}></i>
                        </div>
                        <div className=" input-box mail password">
                        <input className="input" type={showRepeatPassword ? "text" : "password"} placeholder="Repeat password" {...register("repeatpassword", { required: true, validate:(value) =>value===passwordValue })} />
                        <i className="fa-regular fa-eye" onClick={() => setShowRepeatPassword(!showRepeatPassword)} aria-label={showRepeatPassword ? "Hide Password" : "Show Password"} ></i>
                        {errors.repeatpassword?.type === 'required' && <p className="err-msg">Repeatpassword is mandatory</p>}
                        {errors.repeatpassword?.type === 'validate' && <p className="err-msg">Password and Repeat password must be similar</p>}
                    </div>
                
                    <div class="input-box">
                        <input type="text" placeholder="Mobile No" id="mobile" {...register("mobile", {required: true})}/>
                        {errors.mobile?.type === 'required' && <p className="error-msg">Mobile no is mandatory</p>}
                        <i className='bx bxs-user'></i>
                    </div>
                    <button onClick={handleSubmit(RegisterUser)} className="btn">Register</button>
                    <div className="register-link">
                        <p>Already have an account <Link to='/Login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;