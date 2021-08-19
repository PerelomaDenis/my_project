import React, {useCallback, useState} from "react";

import {Button} from "react-bootstrap";
import {NavLink, Redirect} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';
import {validateField} from "../../services/valid";
import {loginFormFields} from "../../services/mock";
import {login} from "../../services/ajaxUser";


const Login = ({createToken, isToken}) => {

	const [isFormValid, setFormIsValid] = useState(true)
	const [isValid, setIsValid] = useState({
		emailValid: '',
		passwordValid: '',
	})
	const [loginForm, setLoginForm] = useState({});
	const [loginError, setLoginError] = useState('');


	const handleChange = (e, type) => {
		const {value} = e.target
		setLoginForm((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value, isValid, setIsValid, loginForm)
	}

	const redirect = () => {
		return <Redirect to="/"/>
	}

	const getApiCall = useCallback((data) => {
		login(data)
			.then((response) => {
				createToken(response)
				redirect()
			})
			.catch((e) => {
				setLoginError('Email or password wrong')
			})
	}, [])


	return (
		<div className="wraps">
			{isToken.length > 0 && <Redirect to={'/'}/>}
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
					{loginError && (<div className="error__text">{loginError}</div>)}
					<Button className="register-form__btn" onClick={() => getApiCall(loginForm)}>
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