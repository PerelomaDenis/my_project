import React, {useState} from "react";
import {ReactSVG} from "react-svg";
import {Button, Modal} from "react-bootstrap";

import './MyEditModal.scss';
import {errorClass, validateField} from "../../services/valid";

const MyEditModal = (
	{
		info,
		onHide,
		show,
		productId,
		getProd,
		setGetProd
	}) => {
	const [isValid, setIsValid] = useState({
		storeNameValid: true,
		priceValid: true,
		productNameValid: true,
		productCategoryValid: true,
		quantityValid: true,
		weightValid: true,
	})
	const newGetProd = getProd.filter((el) => el.id === productId.productId)[0]
	const [editForm, setEditFrom] = useState(newGetProd);

	const handleChange = (e, type) => {
		const {value} = e.target
		setEditFrom((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value, isValid, setIsValid, editForm)
	}
console.log('========>isValid', isValid);
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
						</div>
					))}
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" className="modal__btn" onClick={(e) => {
						e.preventDefault();

						const newChangedProd = getProd.map((prod) => {
							if(prod.id === productId.productId) {
								prod = {...editForm}
								return prod
							}
							return prod
						})
						let values = Object.values((isValid));
						if(values.includes(false) || values.includes('')) {
							alert('Неверно введена информация')
						} else {
							onHide()
							setGetProd(newChangedProd)
							localStorage.setItem('products', JSON.stringify(newChangedProd))
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