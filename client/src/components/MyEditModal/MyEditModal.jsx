import React, {useCallback, useState} from "react";
import {ReactSVG} from "react-svg";
import {Button, Modal} from "react-bootstrap";

import './MyEditModal.scss';
import {errorClass, validateField} from "../../services/valid";
import {updateProduct} from "../../services/ajaxUser";

const MyEditModal = (
	{
		info,
		onHide,
		show,
		getProd,
		setGetProd,
		productId
	}) => {
	const [isFormValid, setFormIsValid] = useState(true)
	const [isValid, setIsValid] = useState({
		storeNameValid: true,
		priceValid: true,
		productNameValid: true,
		productCategoryValid: true,
		quantityValid: true,
		weightValid: true,
	})
	const getOneProduct = getProd.filter((item) => item._id === productId)
	const [editForm, setEditFrom] = useState(getOneProduct[0]);

	const handleChange = (e, type) => {
		const {value} = e.target
		setEditFrom((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value, isValid, setIsValid, editForm)
	}

	const updateMyProduct = useCallback(
		(id, data) => {
			updateProduct(id, data)
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
								name={input.name}
								id={input.name}
								type={input.type}
								onChange={(e) => handleChange(e, input.name)}
								className={`modal__input ${errorClass(isValid[input.errorValid])}`}
								placeholder={input.placeholder}
								value={editForm[input.name]}
							/>
							{errorClass(isValid[input.errorValid]) && (<div className="error-text">{input.errorText}</div>)}
						</div>
					))}
					{!isFormValid && (<div className="error__text">Not all fields are filled</div>)}
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" className="modal__btn" onClick={(e) => {
						e.preventDefault();

						const newChangedProd = getProd.map((prod) => {
							if(prod._id === productId) {
								prod = {...editForm}
								return prod
							}
							return prod
						})

						let values = Object.values((isValid));
						if(values.includes(false) || values.includes('')) {
							setFormIsValid(false )
						} else {
							setFormIsValid(true )
						onHide()
							updateMyProduct(productId, editForm)
							setGetProd(newChangedProd)
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

export default MyEditModal;