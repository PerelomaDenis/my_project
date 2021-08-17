import React, {useState} from "react";
import {Button, Offcanvas} from "react-bootstrap";

import MainTitle from "../MainTitle";
import ButtonCreate from "../ButtonCreate";
import MyCreateModal from "../MyCreateModal";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Personal.scss';
import {modalCreate, personalFormFields, personalFormPasswordFields, personalProps} from "../../services/mock";
import FormInput from "../FormInput";
import {errorClass, validateField} from "../../services/valid";
import {ReactSVG} from "react-svg";
import menu from "../../assets/images/menu.svg";
import Sidebar from "../Sidebar";


const Personal = ({changeIsReg, removeToken}) => {
	const userId = JSON.parse(localStorage.getItem('userId'));
	const [isFormValid, setFormIsValid] = useState(true)
	const [isValid, setIsValid] = useState({
		productCategoryValid: true,
		firstNameValid: true,
		lastNameValid: true,
		companyValid: true,
		addressValid: true,
		oldPasswordValid: true,
		newPasswordValid: true,
	})
	const [newPassword, setNewPassword] = useState({})
	const [getUsers, setGetUsers] = useState(JSON.parse(localStorage.getItem('users')))
	const [modalCreateShow, setModalCreateShow] = React.useState(false);
	const getUser = getUsers.filter((user) => user.id === userId)[0]
	const [personalForm, setPersonalForm] = useState(getUser);

	const [getProd, setGetProd] = useState(JSON.parse(localStorage.getItem('products')))


	const handleChange = (e, type) => {
		const {value} = e.target
		setPersonalForm((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value, isValid, setIsValid, personalForm)
	}

	const handleChangePassword = (e, type) => {
		const {value} = e.target
		setNewPassword((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value, isValid, setIsValid, newPassword)
	}

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = (e) => {
		e.preventDefault();
		setShow(true);
	}

	if(personalForm.newPassword === '') isValid.newPasswordValid = true;
	if(personalForm.oldPassword === '') isValid.oldPasswordValid = true;

	return (
		<div className="wrap">
			<div className="wrap__top">
				<div className="wrap__top-mobile">
					<ReactSVG className="" src={menu} onClick={handleShow}/>
					<Offcanvas show={show} onHide={handleClose}>
						<Offcanvas.Header closeButton>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Sidebar changeIsReg={changeIsReg} removeToken={removeToken}/>
						</Offcanvas.Body>
					</Offcanvas>
				</div>
				<MainTitle title={personalProps.title} description={personalProps.description}/>
				<Button className="button" variant="primary" onClick={() => setModalCreateShow(true)}>
					<ButtonCreate/>
				</Button>
			</div>
			<hr/>
			<div className="wrap__content">
				<form className="personal-form">
					<div className="personal-form__row">
						{personalFormFields.map((field) => (
							<div className="personal-form__el">
								<div className="personal-form__item">
									<label className="personal-form__item-title" htmlFor={field.id}>{field.label}</label>
									<input
										className={`personal-form__item-input ${errorClass(isValid[field.valid])}`}
										type={field.type}
										id={field.id}
										name={field.id}
										placeholder={field.placeholder}
										value={personalForm[field.id]}
										onChange={(e) => handleChange(e, field.id)}
									/>
								</div>
								{errorClass(isValid[field.valid]) && (<div className="error__text">{field.errorText}</div>)}
							</div>
						))}
						{personalFormPasswordFields.map((field) => (
							<div className="personal-form__el">
								<div className="personal-form__item">
									<label className="personal-form__item-title" htmlFor={field.id}>{field.label}</label>
									<input
										className={`personal-form__item-input ${errorClass(isValid[field.valid])}`}
										type={field.type}
										id={field.id}
										name={field.id}
										placeholder={field.placeholder}
										value={newPassword[field.id]}
										onChange={(e) => handleChangePassword(e, field.id)}
									/>
								</div>
								{errorClass(isValid[field.valid]) && (<div className="error__text">{field.errorText}</div>)}
							</div>
						))}
					</div>
					{!isFormValid && (<div className="error__text">Information entered wrong</div>)}
					<div>
						<Button className="button" variant="primary" onClick={(e) => {
							e.preventDefault();
							if (personalForm.password === newPassword.oldPassword
								&& newPassword.oldPassword !== newPassword.newPassword) {
								personalForm.password = newPassword.newPassword
							}
							const newUsers = getUsers.map((user) => {
								if (user.email === getUser.email) {
									user = {...personalForm}
									return user
								}
								return user
							})
							let values = Object.values((isValid));
							if (values.includes(false) || values.includes('')) {
								setFormIsValid(false)
							} else {
								setFormIsValid(true)
								setGetUsers(newUsers)
								localStorage.setItem('users', JSON.stringify(newUsers))
								setNewPassword({oldPassword: '', newPassword: ''})
							}
						}}>
							<div className="personal-form__button">
								<span className="personal-form__button-text">Save changes</span>
							</div>
						</Button>
					</div>
				</form>
				{modalCreateShow && (
					<MyCreateModal
						info={modalCreate}
						show={modalCreateShow}
						onHide={() => setModalCreateShow(false)}
						getProd={getProd}
					/>
				)}
			</div>
		</div>
	)
}

export default Personal;