import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

import MainTitle from "../MainTitle";
import ButtonCreate from "../ButtonCreate";
import MyModal from "../MyModal";

import plus from "../../assets/images/plus.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Personal.scss';


const Personal = (props) => {
	const [modalShow, setModalShow] = React.useState(false);

	const personalProps = {
		title: "Personal Cabinet",
		description: "Information about your account"
	}

	const modalCreate = {
		title: 'Create a product',
		buttonIcon: {plus},
		buttonText: 'Add product',
		inputs: [
			{
				type: 'text',
				placeholder: 'Store'
			},
			{
				type: 'text',
				placeholder: 'Price'
			},
			{
				type: 'text',
				placeholder: 'Product name'
			},
			{
				type: 'text',
				placeholder: 'Product Category'
			},
			{
				type: 'text',
				placeholder: 'Quantity of goods'
			},
			{
				type: 'text',
				placeholder: 'Weight / Volume of one item'
			},
		]
	}

	return (
		<div className="wrap">
			<div className="wrap__top">
				<MainTitle title={personalProps.title} description={personalProps.description}/>
				<Button className="button" variant="primary" onClick={() => setModalShow(true)}>
					<ButtonCreate />
				</Button>
				<MyModal
					info={modalCreate}
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</div>
			<hr/>
			<div className="wrap__content">
				<form className="personal-form">
					<div className="personal-form__row">
						<div className="personal-form__item">
							<label className="personal-form__item-title" htmlFor="firstName">First name</label>
							<input className="personal-form__item-input" type="text" id="firstName" name="firstName"
										 placeholder="Enter your first name"/>
						</div>
						<div className="personal-form__item">
							<label className="personal-form__item-title" htmlFor="lastName">Last name</label>
							<input className="personal-form__item-input" type="text" id="lastName" name="lastName"
										 placeholder="Enter your last name"/>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__item">
							<label className="personal-form__item-title" htmlFor="companyName">Company name</label>
							<input className="personal-form__item-input" type="text" id="companyName" name="companyName"
										 placeholder="Enter your company name"/>
						</div>
						<div className="personal-form__item">
							<label className="personal-form__item-title" htmlFor="productCategory">Product Category</label>
							<input className="personal-form__item-input" type="text" id="productCategory" name="productCategory"
										 placeholder="Enter product category"/>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__item">
							<label className="personal-form__item-title" htmlFor="address">Address</label>
							<input className="personal-form__item-input" type="text" id="address" name="address"
										 placeholder="Enter your address"/>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__item">
							<label className="personal-form__item-title" htmlFor="oldPassword">Enter old password</label>
							<input className="personal-form__item-input" type="password" id="oldPassword" name="oldPassword"
										 placeholder="Enter password"/>
						</div>
						<div className="personal-form__item">
							<label className="personal-form__item-title" htmlFor="newPassword">Enter a new password</label>
							<input className="personal-form__item-input" type="password" id="newPassword" name="newPassword"
										 placeholder="Enter your new password"/>
						</div>
					</div>
					<Button className="button" variant="primary" onClick={() => setModalShow(true)}>
						<div className="personal-form__button">
							<span className="personal-form__button-text">Save changes</span>
						</div>
					</Button>

				</form>
			</div>
		</div>
	)
}

export default Personal;