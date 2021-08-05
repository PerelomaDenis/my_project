import React, {useState} from "react";

import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';


const Login = (props) => {
	return (
		<div className="wraps">
			<div className="wrap-left">
				<h1>Sign in</h1>
				<form className="register-form">
					<div className="register-form__row">
						<div className="register-form__item">
							<label className="register-form__item-title" htmlFor="email">Email</label>
							<input className="register-form__item-input" type="email" id="email" name="email"
										 placeholder="Email"/>
						</div>
					</div>
					<div className="register-form__row">
						<div className="register-form__item">
							<label className="register-form__item-title" htmlFor="password">Password</label>
							<input className="register-form__item-input" type="password" id="password" name="password"
										 placeholder="Enter password"/>
						</div>
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
				{/*<img src={img}/>*/}
			</div>
		</div>
	)
}

export default Login;