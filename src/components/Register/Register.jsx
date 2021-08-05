import React from "react";
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.scss';
import FormInput from "../FormInput";


const Register = (props) => {
	return (
		<div className="wraps">
			<div className="wrap-left">
				<h1>Create an account</h1>
				<form className="register-form">
					<div className="register-form__row">
						<div className="register-form__item-small">
							<div className="register-form__el">
								<FormInput id="firstName"
													 type="text"
													 label="First name"
													 placeholder="First name"
								/>
							</div>
						</div>
						<div className="register-form__item-small">
							<div className="register-form__el">
								<FormInput id="lastName"
													 type="text"
													 label="Last name"
													 placeholder="Last name"
								/>
							</div>
						</div>
					</div>
					<div className="register-form__row">
						<div className="register-form__el">
							<FormInput id="company"
												 type="text"
												 label="Company name"
												 placeholder="Enter your address"
							/>
						</div>
					</div>
					<div className="register-form__row">
						<div className="register-form__el">
							<FormInput id="email"
												 type="email"
												 label="Email"
												 placeholder="Email"
							/>
						</div>
					</div>
					<div className="register-form__row">
						<div className="register-form__el">
							<FormInput id="password"
												 type="password"
												 label="Password"
												 placeholder="Enter password"
							/>
						</div>
					</div>
					<div className="register-form__row">
						<div className="register-form__el">
							<FormInput id="repeatPassword"
												 type="password"
												 label="Repeat password"
												 placeholder="Repeat password"
							/>
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
			</div>
		</div>
	)
}

export default Register;