import React, {useCallback, useState} from "react";

import {Button} from "react-bootstrap";
import {NavLink, Redirect} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';
import {validateField} from "../../services/valid";
import {loginFormFields} from "../../services/mock";
import {login} from "../../services/ajaxUser";


const Login = ({createToken}) => {
	const [isFormValid, setFormIsValid] = useState(true)
	const [isValid, setIsValid] = useState({
		emailValid: '',
		passwordValid: '',
	})
	const [loginForm, setLoginForm] = useState({});
	const [isToken, setIsToken] = useState(localStorage.getItem('token'));


	const handleChange = (e, type) => {
		const {value} = e.target
		setLoginForm((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value, isValid, setIsValid, loginForm)
	}

	const getApiCall = useCallback((data) => {
		login(data)
			.then((response) => {
				createToken(response)
			})
	}, [])

	const handleLoginClick = (e) => {
		getApiCall(loginForm)
		// let isEmail = false;
		// let isPassword = false;
		// let userId;
		//
		// for (let i = 0; i < getUsers.length; i++) {
		// 	for (let key in getUsers[i]) {
		// 		if (key === 'email') {
		// 			if (getUsers[i][key] === loginForm.email) {
		// 				isEmail = true;
		// 				userId = getUsers[i]['id'];
		// 			}
		// 		}
		//
		// 		if (key === 'password') {
		// 			if (getUsers[i][key] === loginForm.password) {
		// 				isPassword = true;
		// 			}
		// 		}
		// 	}
		// }
		//
		// if (isPassword && isEmail) {
		// 	let values = Object.values((isValid));
		// 	if (values.includes(false) || values.includes('')) {
		// 		setFormIsValid(false)
		// 	} else {
		// 		setFormIsValid(true)
		// 		setIsLogin(true);
		// 		localStorage.setItem('isLogin', JSON.stringify(true));
		// 		changeIsLoin(true);
		// 		changeUserId(userId);
		// 		localStorage.setItem('userId', JSON.stringify(userId));
		// 	}
		// } else {
		// 	setFormIsValid(false)
		// }
	}

	return (
		<div className="wraps">
			{isToken && <Redirect to={'/'}/>}
			<div className="wrap-left">
				<h1>Sign in</h1>
				<form className="register-form">
					{loginFormFields.map((field) => (
						<div className="login-form__row">
							<div className="register-form__el">
								<div className="register-form__item">
									<label className="register-form__item-title" htmlFor={field.id}>{field.label}</label>
									<input
										className="register-form__item-input"
										type={field.type}
										id={field.id}
										name={field.id}
										placeholder={field.placeholder}
										value={loginForm[field.id]}
										onChange={(e) => handleChange(e, field.id)
										}
									/>
								</div>
							</div>
						</div>
					))}
					{!isFormValid && (<div className="error__text">Email or password entered wrong</div>)}
					<Button className="register-form__btn" onClick={() => handleLoginClick()}>
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