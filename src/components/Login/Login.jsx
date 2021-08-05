import React from "react";

import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';
import FormInput from "../FormInput";


const Login = (props) => {
	return (
		<div className="wraps">
			<div className="wrap-left">
				<h1>Sign in</h1>
				<form className="register-form">
					<div className="register-form__row">
						<FormInput id="email"
											 type="email"
											 label="Email"
											 placeholder="Email"
						/>
					</div>
					<div className="register-form__row">
						<FormInput id="password"
											 type="password"
											 label="Password"
											 placeholder="Enter password"
						/>
					</div>
					<Button className="register-form__btn">
						<div className="register-form__button">
							<span className="register-form__btn-text">Log in</span>
						</div>
					</Button>
				</form>
				<div className="wrap-left__question">
					<NavLink className="wrap-left__question-link" to="/register">Forgot password?</NavLink>
				</div>
			</div>
			<div className="wrap-right">
			</div>
		</div>
	)
}

export default Login;