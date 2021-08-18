import React, {useCallback, useState} from "react";
import {Button} from "react-bootstrap";
import {NavLink, Redirect} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.scss';
import {errorClass, validateField} from "../../services/valid";
import {registerFormFields} from "../../services/mock";
import {registration} from "../../services/ajaxUser";


const Register = ({changeIsReg}) => {
	const [isFormValid, setFormIsValid] = useState({valid: true, errorText: 'Information entered wrong'})
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
	const [registerForm, setRegisterForm] = useState({});

	const handleChange = (e, type) => {
		const {value} = e.target
		setRegisterForm((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value, isValid, setIsValid, registerForm)
	}

	const getApiCall = useCallback(
		(data) => {
			 registration(data)
				 .then((r)=>{console.log('========>r',r );})
				 .catch((e)=>{console.log('========>e', e);})

		}, [])

	const handleRegisterClick = (e) => {
		getApiCall(registerForm)
		// console.log('========>getApiCall(registerForm)', getApiCall(registerForm));
		// let isEmail = false;
		// for(let i=0; i < getUsers.length; i++) {
		// 	for(let key in getUsers[i]) {
		// 		if(key === 'email') {
		// 			if(getUsers[i][key] === registerForm.email) {
		// 				isEmail = true;
		// 			}
		// 		}
		// 	}
		// }
		//
		// if(!isEmail) {
		// 	let values = Object.values((isValid));
		// 	if(values.includes(false) || values.includes('')) {
		// 		setFormIsValid({valid: false, errorText: 'Information entered wrong'})
		// 	} else {
		// 		setFormIsValid({valid: true, errorText: 'Information entered wrong'})
		// 		getUsers.push(registerForm);
		// 		localStorage.setItem('users', JSON.stringify(getUsers));
		// 		setIsReg(true);
		// 		localStorage.setItem('isReg', JSON.stringify(true));
		// 		changeIsReg(true)
		// 	}
		// } else {
		// 	setFormIsValid({valid: false, errorText: 'This email is exist'})
		// }
	}

		return (
		<div className="wraps">
			{isReg && <Redirect to={'/login'}/>}
			{
				<div className="wrap-left">
					<h1>Create an account</h1>
					<form className="register-form">
						{registerFormFields.map((field) => (
							<div className="register-form__row">
								<div className="register-form__el">
									<div className="register-form__item">
										<label className="register-form__item-title" htmlFor={field.id}>{field.label}</label>
										<input
											className={`register-form__item-input ${errorClass(isValid[field.valid])}`}
											type={field.type}
											id={field.id}
											name={field.id}
											placeholder={field.placeholder}
											value={registerForm[field.id]}
											onChange={(e) => handleChange(e, field.id)
											}
										/>
									</div>
									{errorClass(isValid[field.valid]) && (<div className="error__text">{field.errorText}</div>)}
								</div>
							</div>
						))}
						{!isFormValid.valid && (<div className="error__text">{isFormValid.errorText}</div>)}
						<Button className="register-form__btn" onClick={() => handleRegisterClick()}>
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