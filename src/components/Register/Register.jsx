import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.scss';
import img from "../../assets/images/img.png";
import {ReactSVG} from "react-svg";
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const Register = (props) => {
	return (
		<div className="wrap">
			<div className="wrap-left">
				<h1>Create an account</h1>
				<form className="register-form">
					<div className="register-form__row">
						<div className="register-form__item register-form__item-small">
							<label className="register-form__item-title" htmlFor="firstName">First name</label>
							<input className="register-form__item-input" type="text" id="firstName" name="firstName"
										 placeholder="First name"/>
						</div>
						<div className="register-form__item register-form__item-small">
							<label className="register-form__item-title" htmlFor="lastName">Last name</label>
							<input className="register-form__item-input" type="text" id="lastName" name="lastName"
										 placeholder="Last name"/>
						</div>
					</div>
					<div className="register-form__row">
						<div className="register-form__item">
							<label className="register-form__item-title" htmlFor="company">Company name</label>
							<input className="register-form__item-input" type="text" id="company" name="company"
										 placeholder="Company name"/>
						</div>
					</div>
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
					<div className="register-form__row">
						<div className="register-form__item">
							<label className="register-form__item-title" htmlFor="repeatPassword">Repeat password</label>
							<input className="register-form__item-input" type="password" id="repeatPassword" name="repeatPassword"
										 placeholder="Repeat password"/>
						</div>
					</div>
					<Button className="register-form__btn">
						<div className="register-form__button">
							<span className="register-form__btn-text">Create account</span>
						</div>
					</Button>
				</form>
				<div className="wrap-left__question">
					Already have an account?
					<NavLink className="wrap-left__question-link" to="/login"> Log in</NavLink>
				</div>
			</div>
			<div className="wrap-right">
				{/*<img src={img}/>*/}
			</div>
		</div>
	)
}

export default Register;