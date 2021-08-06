import React, {useState} from "react";
import {Button} from "react-bootstrap";

import MainTitle from "../MainTitle";
import ButtonCreate from "../ButtonCreate";
import MyCreateModal from "../MyCreateModal";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Personal.scss';
import {modalCreate, personalProps} from "../../services/mock";
import FormInput from "../FormInput";


const Personal = (props) => {
	const [newPassword, setNewPassword] = useState({})
	const [getUsers, setGetUsers] = useState(JSON.parse(localStorage.getItem('users')))
	const [modalCreateShow, setModalCreateShow] = React.useState(false);
	const getUser = getUsers.filter((user) => user.email === 'qqq@mail.ru')[0]
	const [personalForm, setPersonalForm] = useState(getUser);
	console.log('========>personalForm', personalForm);
	console.log('========>newPassword', newPassword);

	const handleChange = (e, type) => {
		const {value} = e.target
		setPersonalForm((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
	}

	const handleChangePassword = (e, type) => {
		const {value} = e.target
		setNewPassword((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
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
								<input className="personal-form__item-input"
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
								<input className="personal-form__item-input"
											 type="text"
											 id="lastName"
											 name="lastName"
											 placeholder="Enter your last name"
											 value={personalForm["lastName"]}
											 onChange={(e) => handleChange(e, "lastName")}
								/>
							</div>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="companyName">Company name</label>
								<input className="personal-form__item-input"
											 type="text"
											 id="companyName"
											 name="companyName"
											 placeholder="Enter your company name"
											 value={personalForm["companyName"]}
											 onChange={(e) => handleChange(e, "companyName")}
								/>
							</div>
						</div>
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="productCategory">Product Category</label>
								<input className="personal-form__item-input"
											 type="text"
											 id="productCategory"
											 name="productCategory"
											 placeholder="Enter product category"
											 value={personalForm["productCategory"]}
											 onChange={(e) => handleChange(e, "productCategory")}
								/>
							</div>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="address">Address</label>
								<input className="personal-form__item-input"
											 type="text"
											 id="address"
											 name="address"
											 placeholder="Enter your address"
											 value={personalForm["address"]}
											 onChange={(e) => handleChange(e, "address")}
								/>
							</div>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="oldPassword">Enter old password</label>
								<input className="personal-form__item-input"
											 type="password"
											 id="oldPassword"
											 name="oldPassword"
											 placeholder="Enter password"
											 value={newPassword["oldPassword"]}
											 onChange={(e) => handleChangePassword(e, "oldPassword")}
								/>
							</div>
						</div>
						<div className="personal-form__el">
							<div className="personal-form__item">
								<label className="personal-form__item-title" htmlFor="newPassword">Enter a new password</label>
								<input className="personal-form__item-input"
											 type="password"
											 id="newPassword"
											 name="newPassword"
											 placeholder="Enter your new password"
											 value={newPassword["newPassword"]}
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
						setGetUsers(newUsers)
						localStorage.setItem('users', JSON.stringify(newUsers))
						setNewPassword({oldPassword: '', newPassword: ''})
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