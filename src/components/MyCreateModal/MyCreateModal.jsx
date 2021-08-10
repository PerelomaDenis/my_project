import React, {useState} from "react";
import {ReactSVG} from "react-svg";
import {Button, Modal} from "react-bootstrap";

import './MyCreateModal.scss';
import {errorClass, validateField} from "../../services/valid";

const MyCreateModal = (
	{
		info,
		onHide,
		show,
		getProd
	}) => {
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
	
	console.log('========>isValid', isValid);

	const handleChange = (e, type) => {
		const {value} = e.target
		setFrom((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value, isValid, setIsValid, form)
	}

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
						</div>
					))}
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" className="modal__btn" onClick={(e) => {
						e.preventDefault();

						let values = Object.values((isValid));
						if(values.includes(false) || values.includes('')) {
							alert('Неверно введена информация')
						} else {
							onHide()
							getProd.push(form);
							localStorage.setItem('products', JSON.stringify(getProd))
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