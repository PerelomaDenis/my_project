import React from "react";
import {Button} from "react-bootstrap";

import MainTitle from "../MainTitle";
import ButtonCreate from "../ButtonCreate";
import MyModal from "../MyModal";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Personal.scss';
import {modalCreate, personalProps} from "../../services/mock";
import FormInput from "../FormInput";


const Personal = (props) => {
	const [modalShow, setModalShow] = React.useState(false);

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
						<div className="personal-form__el">
							<FormInput id="firstName"
											 type="text"
											 label="First name"
											 placeholder="Enter your first name"
							/>
						</div>
						<div className="personal-form__el">
							<FormInput id="lastName"
											 type="text"
											 label="Last name"
											 placeholder="Enter your last name"
							/>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__el">
							<FormInput id="companyName"
											 type="text"
											 label="Company name"
											 placeholder="Enter your company name"
							/>
						</div>
						<div className="personal-form__el">
							<FormInput id="productCategory"
											 type="text"
											 label="Product Category"
											 placeholder="Enter product category"
							/>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__el">
							<FormInput id="address"
											 type="text"
											 label="Address"
											 placeholder="Enter your address"
							/>
						</div>
					</div>
					<div className="personal-form__row">
						<div className="personal-form__el">
							<FormInput id="oldPassword"
											 type="password"
											 label="Enter old password"
											 placeholder="Enter password"
							/>
						</div>
						<div className="personal-form__el">
							<FormInput id="newPassword"
											 type="password"
											 label="Enter a new password"
											 placeholder="Enter your new password"
							/>
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