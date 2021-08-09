import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {NavLink, Redirect} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.scss';


const Register = ({changeIsReg}) => {
	const [isValid, setIsValid] = useState({
		emailValid: '',
		firstNameValid: '',
		lastNameValid: '',
		companyValid: '',
		passwordValid: '',
		confirmPasswordValid: '',
	})
	const [isReg, setIsReg] = useState(JSON.parse(localStorage.getItem('isReg')))
	const [getUsers, setGetUsers] = useState(JSON.parse(localStorage.getItem('users')))
	const [registerForm, setRegisterForm] = useState({
		productCategory: 'IT',
		address: "Taganrog",
		id: Date.now(),
	});


	const handleChange = (e, type) => {
		const {value} = e.target
		setRegisterForm((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value)
	}

	const errorClass = (n) => {
		return (n === false ? 'has-error' : '')
	}

	const validateField = (fieldName, value) => {
		let emailValid = isValid.emailValid;
		let companyValid = isValid.companyValid;
		let firstNameValid = isValid.firstNameValid;
		let lastNameValid = isValid.lastNameValid;
		let passwordValid = isValid.passwordValid;
		let confirmPasswordValid = isValid.confirmPasswordValid;

		switch(fieldName) {
			case 'email':
				const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				reg.test(value) ? emailValid = true : emailValid = false;
				if(value === '') emailValid = '';
				setIsValid((prevForm) => ({
					...prevForm,
					emailValid: emailValid
				}))
				break;
			case 'firstName':
				value.length > 5 ? firstNameValid = true : firstNameValid = false;
				if(value === '') firstNameValid = '';
				setIsValid((prevForm) => ({
					...prevForm,
					firstNameValid: firstNameValid
				}))
				break;
			case 'lastName':
				value.length > 5 ? lastNameValid = true : lastNameValid = false;
				if(value === '') lastNameValid = '';
				setIsValid((prevForm) => ({
					...prevForm,
					lastNameValid: lastNameValid
				}))
				break;
			case 'company':
				value.length > 5 ? companyValid = true : companyValid = false;
				if(value === '') companyValid = '';
				setIsValid((prevForm) => ({
					...prevForm,
					companyValid: companyValid
				}))
				break;
			case 'password':
				value.length > 5 ? passwordValid = true : passwordValid = false;
				if(value === '') passwordValid = '';
				setIsValid((prevForm) => ({
					...prevForm,
					passwordValid: passwordValid
				}))
				break;
			case 'repeatPassword':
				value.length > 5 && registerForm.password === value ? confirmPasswordValid = true : confirmPasswordValid = false;
				if(value === '') confirmPasswordValid = '';
				setIsValid((prevForm) => ({
					...prevForm,
					confirmPasswordValid: confirmPasswordValid
				}))
				break;
		}

 
	}

	console.log('========>isValid', isValid);
	
		return (
		<div className="wraps">
			{isReg && <Redirect to={'/login'}/>}
			{
				<div className="wrap-left">
					<h1>Create an account</h1>
					<form className="register-form">
						<div className="register-form__row">
							<div className="register-form__el">
								<div className="register-form__item">
									<label className="register-form__item-title" htmlFor="firstName">First name</label>
									<input
										 className={`register-form__item-input ${errorClass(isValid.firstNameValid)}`}
										 type="text"
										 id="firstName"
										 name="firstName"
										 placeholder="First name"
										 value={registerForm.firstName}
										 onChange={(e) => handleChange(e, "firstName")
										 }
									/>
								</div>
							</div>
							<div className="register-form__el">
								<div className="register-form__item">
									<label className="register-form__item-title" htmlFor="lastName">Last name</label>
									<input
										 className={`register-form__item-input ${errorClass(isValid.lastNameValid)}`}
										 type="text"
										 id="lastName"
										 name="lastName"
										 placeholder="Last name"
										 value={registerForm.lastName}
										 onChange={(e) => handleChange(e, "lastName")}
									/>
								</div>
							</div>
						</div>
						<div className="register-form__row">
							<div className="register-form__el">
								<div className="register-form__item">
									<label className="register-form__item-title" htmlFor="company">Company name</label>
									<input
										 className={`register-form__item-input ${errorClass(isValid.companyValid)}`}
										 type="text"
										 id="company"
										 name="company"
										 placeholder="Company name"
										 value={registerForm.company}
										 onChange={(e) => handleChange(e, "company")}
									/>
								</div>
							</div>
						</div>
						<div className="register-form__row">
							<div className="register-form__el">
								<div className="register-form__item">
									<label className="register-form__item-title" htmlFor="email">Email</label>
									<input
										 className={`register-form__item-input ${errorClass(isValid.emailValid)}`}
										 type="email"
										 id="email"
										 name="email"
										 placeholder="Email"
										 value={registerForm.email}
										 onChange={(e) => handleChange(e, "email")}
									/>
								</div>
							</div>
						</div>
						<div className="register-form__row">
							<div className="register-form__el">
								<div className="register-form__item">
									<label className="register-form__item-title" htmlFor="password">Password</label>
									<input
										 className={`register-form__item-input ${errorClass(isValid.passwordValid)}`}
										 type="password"
										 id="password"
										 name="password"
										 placeholder="Enter password"
										 value={registerForm.password}
										 onChange={(e) => handleChange(e, "password")}
									/>
								</div>
							</div>
						</div>
						<div className="register-form__row">
							<div className="register-form__el">
								<div className="register-form__item">
									<label className="register-form__item-title" htmlFor="repeatPassword">Repeat password</label>
									<input
										 className={`register-form__item-input ${errorClass(isValid.confirmPasswordValid)}`}
										 type="password"
										 id="repeatPassword"
										 name="repeatPassword"
										 placeholder="Repeat password"
										 value={registerForm.repeatPassword}
										 onChange={(e) => handleChange(e, "repeatPassword")}
									/>
								</div>
							</div>
						</div>
						<Button className="register-form__btn" onClick={(e) => {
							let isEmail = false;
							for(let i=0; i < getUsers.length; i++) {
								for(let key in getUsers[i]) {
									if(key === 'email') {
										if(getUsers[i][key] === registerForm.email) {
											isEmail = true;
										}
									}
								}
							}

							if(!isEmail) {
								let values = Object.values((isValid));
								if(values.includes(false) || values.includes('')) {
									alert('Неверно введена информация')
								} else {
									getUsers.push(registerForm);
									localStorage.setItem('users', JSON.stringify(getUsers));
									setIsReg(true);
									localStorage.setItem('isReg', JSON.stringify(true));
									changeIsReg(true)
								}
							} else {
								alert('Такой email зарегистрирован')
							}
						}
						}>
							<div className="register-form__button">
								<span className="register-form__btn-text">Create account</span>
							</div>
						</Button>
					</form>
					<div className="wrap-left__question">
						Already have an account?
						<NavLink className="wrap-left__question-link" to="/login" onClick={(e) => {
							setIsReg(true);
							localStorage.setItem('isReg', JSON.stringify(true));
							changeIsReg(true)
						}}> Log in</NavLink>
					</div>
				</div>
			}
			<div className="wrap-right">
			</div>
		</div>
	)
}

export default Register;