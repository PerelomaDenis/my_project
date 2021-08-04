import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Personal.scss';
import MainTitle from "../MainTitle";
import ButtonCreate from "../ButtonCreate";
import MyModal from "../MyModal";
import plus from "../../assets/images/plus.svg";


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

	const formFields = [
		{
			id: 'firstName',
			label: 'First name',
			type: 'text',
			placeholder: 'Enter your first name'
		},
		{
			id: 'lastName',
			label: 'Last name',
			type: 'text',
			placeholder: 'Enter your last name'
		},
		{
			id: 'companyName',
			label: 'Company name',
			type: 'text',
			placeholder: 'Enter your company name'
		},
		{
			id: 'productCategory',
			label: 'Product Category',
			type: 'text',
			placeholder: 'Enter product category'
		},
		{
			id: 'address',
			label: 'Address',
			type: 'text',
			placeholder: 'Enter your address'
		},
		{
			id: 'oldPassword',
			label: 'Enter old password',
			type: 'password',
			placeholder: 'Enter password'
		},
		{
			id: 'newPassword',
			label: 'Enter a new password',
			type: 'password',
			placeholder: 'Enter your new password'
		},
	]

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
					{formFields.map((field) => (
						<div className="personal-form__item">
							<label className="personal-form__item-title" htmlFor={field.id}>{field.label}</label>
							<input className="personal-form__item-input" type={field.id} id={field.id} name={field.id}
										 placeholder={field.placeholder}/>
						</div>
					))}
				</form>
			</div>
		</div>
	)
}

export default Personal;