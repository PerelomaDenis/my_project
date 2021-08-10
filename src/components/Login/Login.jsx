import React, {useState} from "react";

import {Button} from "react-bootstrap";
import {NavLink, Redirect} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';
import {errorClass, validateField} from "../../services/valid";


const Login = ({changeIsLoin, changeUserId}) => {
	const [isValid, setIsValid] = useState({
		emailValid: '',
		passwordValid: '',
	})
	const [getUsers, setGetUsers] = useState(JSON.parse(localStorage.getItem('users')))
	const [loginForm, setLoginForm] = useState({});
	const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')));

	const handleChange = (e, type) => {
		const {value} = e.target
		setLoginForm((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value, isValid, setIsValid, loginForm)
	}
console.log('========>isValid', isValid);
	return (
		<div className="wraps">
			{isLogin && <Redirect to={'/'}/>}
			<div className="wrap-left">
				<h1>Sign in</h1>
				<form className="register-form">
					<div className="register-form__row">
							<div className="register-form__item">
								<label className="register-form__item-title" htmlFor="email">Email</label>
								<input
									 className={`register-form__item-input ${errorClass(isValid.emailValid)}`}
									 type="email"
									 id="email"
									 name="email"
									 placeholder="Email"
									 value={loginForm.email}
									 onChange={(e) => handleChange(e, "email")}
								/>
							</div>
					</div>
					<div className="register-form__row">
							<div className="register-form__item">
								<label className="register-form__item-title" htmlFor="password">Password</label>
								<input
									 className={`register-form__item-input ${errorClass(isValid.passwordValid)}`}
									 type="password"
									 id="password"
									 name="password"
									 placeholder="Enter password"
									 value={loginForm.password}
									 onChange={(e) => handleChange(e, "password")}
								/>
							</div>
					</div>
					<Button className="register-form__btn" onClick={(e) => {
						let isEmail = false;
						let isPassword = false;
						let userId;

						for(let i=0; i < getUsers.length; i++) {
							for(let key in getUsers[i]) {
								if(key === 'email') {
									if(getUsers[i][key] === loginForm.email) {
										isEmail = true;
										userId = getUsers[i]['id'];
									}
								}

								if(key === 'password') {
									if(getUsers[i][key] === loginForm.password) {
										isPassword = true;
									}
								}
							}
						}

						if(isPassword && isEmail) {
							let values = Object.values((isValid));
							if(values.includes(false) || values.includes('')) {
								alert('Неверно введена информация')
							} else {
								setIsLogin(true);
								localStorage.setItem('isLogin', JSON.stringify(true));
								changeIsLoin(true);
								changeUserId(userId);
								localStorage.setItem('userId', JSON.stringify(userId));
							}
						} else {
							alert('Email или пароль введены неверно')
						}

					}}>
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