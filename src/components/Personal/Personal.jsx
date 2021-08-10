import React, {useState} from "react";
import {Button} from "react-bootstrap";

import MainTitle from "../MainTitle";
import ButtonCreate from "../ButtonCreate";
import MyCreateModal from "../MyCreateModal";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Personal.scss';
import {modalCreate, personalProps} from "../../services/mock";
import FormInput from "../FormInput";
import {errorClass, validateField} from "../../services/valid";


const Personal = () => {
	const userId = JSON.parse(localStorage.getItem('userId'));
	const [isValid, setIsValid] = useState({
		productCategoryValid: '',
		firstNameValid: '',
		lastNameValid: '',
		companyValid: '',
		addressValid: '',
		oldPasswordValid: '',
		newPasswordValid: '',
	})
	const [newPassword, setNewPassword] = useState({})
	const [getUsers, setGetUsers] = useState(JSON.parse(localStorage.getItem('users')))
	const [modalCreateShow, setModalCreateShow] = React.useState(false);
	const getUser = getUsers.filter((user) => user.id === userId)[0]
	const [personalForm, setPersonalForm] = useState(getUser);

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

	return (
		<div className="wrap">
			<div className="wrap__top">
				<MainTitle title={personalProps.title} description={personalProps.description}/>
				<Button className="button" variant="primary" onClick={() => setModalCreateShow(true)}>
					<ButtonCreate />
				</Button>
			</div>
			<hr/>
			<div className="wrap__content">
				<form className="personal-form">
					<div className="personal-form__row">
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="firstName">First name</label>
								<input
									 className={`personal-form__item-input ${errorClass(isValid.firstNameValid)}`}
									 type="text"
									 id="firstName"
									 name="firstName"
									 placeholder="Enter your first name"
									 value={personalForm.firstName}
									 onChange={(e) => handleChange(e, "firstName")}
								/>
							</div>
						</div>
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="lastName">Last name</label>
								<input
									 className={`personal-form__item-input ${errorClass(isValid.lastNameValid)}`}
									 type="text"
									 id="lastName"
									 name="lastName"
									 placeholder="Enter your last name"
									 value={personalForm.lastName}
									 onChange={(e) => handleChange(e, "lastName")}
								/>
							</div>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="company">Company name</label>
								<input
									 className={`personal-form__item-input ${errorClass(isValid.companyValid)}`}
									 type="text"
									 id="company"
									 name="company"
									 placeholder="Enter your company name"
									 value={personalForm.company}
									 onChange={(e) => handleChange(e, "company")}
								/>
							</div>
						</div>
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="productCategory">Product Category</label>
								<input
									 className={`personal-form__item-input ${errorClass(isValid.productCategoryValid)}`}
									 type="text"
									 id="productCategory"
									 name="productCategory"
									 placeholder="Enter product category"
									 value={personalForm.productCategory}
									 onChange={(e) => handleChange(e, "productCategory")}
								/>
							</div>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="address">Address</label>
								<input
									 className={`personal-form__item-input ${errorClass(isValid.addressValid)}`}
									 type="text"
									 id="address"
									 name="address"
									 placeholder="Enter your address"
									 value={personalForm.address}
									 onChange={(e) => handleChange(e, "address")}
								/>
							</div>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="oldPassword">Enter old password</label>
								<input
									 className={`personal-form__item-input ${errorClass(isValid.oldPasswordValid)}`}
									 type="password"
									 id="oldPassword"
									 name="oldPassword"
									 placeholder="Enter password"
									 value={newPassword.oldPassword}
									 onChange={(e) => handleChangePassword(e, "oldPassword")}
								/>
							</div>
						</div>
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="newPassword">Enter a new password</label>
								<input
									 className={`personal-form__item-input ${errorClass(isValid.newPasswordValid)}`}
									 type="password"
									 id="newPassword"
									 name="newPassword"
									 placeholder="Enter your new password"
									 value={newPassword.newPassword}
									 onChange={(e) => handleChangePassword(e, "newPassword")}
								/>
							</div>
						</div>
					</div>
					<Button className="button" variant="primary" onClick={(e) => {
						e.preventDefault();
						if(personalForm.password === newPassword.oldPassword
							&& newPassword.oldPassword !== newPassword.newPassword) {
							personalForm.password = newPassword.newPassword
						}
						const newUsers = getUsers.map((user) => {
							if(user.email === getUser.email) {
								user = {...personalForm}
								return user
							}
							return user
						})
						let values = Object.values((isValid));
						if(values.includes(false) || values.includes('')) {
							alert('Неверно введена информация')
						} else {
							setGetUsers(newUsers)
							localStorage.setItem('users', JSON.stringify(newUsers))
							setNewPassword({oldPassword: '', newPassword: ''})
						}
					}}>
						<div className="personal-form__button">
							<span className="personal-form__button-text">Save changes</span>
						</div>
					</Button>

				</form>
				{modalCreateShow && (
					<MyCreateModal
						info={modalCreate}
						show={modalCreateShow}
						onHide={() => setModalCreateShow(false)}
					/>
				)}
			</div>
		</div>
	)
}

export default Personal;