import React, {useCallback, useState} from "react";
import {ReactSVG} from "react-svg";
import {Button, Modal} from "react-bootstrap";

import './MyCreateModal.scss';
import {errorClass, validateField} from "../../services/valid";
import {createProduct, getAllSales, registration} from "../../services/ajaxUser";

const MyCreateModal = (
	{
		info,
		onHide,
		show,
		getProductsCall
	}) => {
	const [isFormValid, setFormIsValid] = useState(true)
	const [isValid, setIsValid] = useState({
		storeNameValid: '',
		priceValid: '',
		productNameValid: '',
		productCategoryValid: '',
		quantityValid: '',
		weightValid: '',
	})
	const [form, setFrom] = useState({
		id: Date.now(),
		createDate: new Date(),
	});

	const handleChange = (e, type) => {
		const {value} = e.target
		setFrom((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value, isValid, setIsValid, form)
	}

	const createNewProduct = useCallback(
		 (data) => {
				createProduct(data)
					.then(() => {
						if(getProductsCall) getProductsCall()
					})
		}, [])

	return (
		<Modal
			onHide={onHide}
			show={show}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			className="modal-window"
		>
			<form className="modal-form">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						{info.title}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{info.inputs.map((input) => (
						<div>
							<label className="modal__label" htmlFor={input.name}>{input.placeholder}</label>
							<input
								id={input.name}
								name={input.name}
								type={input.type}
								onChange={(e) => handleChange(e, input.name)}
								className={`modal__input ${errorClass(isValid[input.errorValid])}`}
								placeholder={input.placeholder}
								value={form[input.name]}
							/>
							{errorClass(isValid[input.errorValid]) && (<div className="error-text">{input.errorText}</div>)}
						</div>
					))}
					{!isFormValid && (<div className="error__text">Not all fields are filled</div>)}
				</Modal.Body>

				<Modal.Footer>
					<Button type="submit" className="modal__btn" onClick={(e) => {
						e.preventDefault();
						let values = Object.values((isValid));
						if(values.includes(false) || values.includes('')) {
							setFormIsValid(false )
						} else {
							setFormIsValid(true)
							onHide()
							createNewProduct(form)
						}
					}}>
						<span className="modal__btn-text">{info.buttonText}</span>
						<ReactSVG className="modal__btn-icon" src={info.buttonIcon}/>
					</Button>
				</Modal.Footer>
			</form>
		</Modal>
	)
}

export default MyCreateModal;