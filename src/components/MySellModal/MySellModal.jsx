import React, {useState} from "react";
import {ReactSVG} from "react-svg";
import {Button, Modal} from "react-bootstrap";

import './MySellModal.scss';

const MySellModal = (
	{
		info,
		onHide,
		show,
		productId,
		getProd,
		setGetProd
	}) => {
	const newGetProd = getProd.filter((el) => el.id === productId.productId)[0]
	const [sellForm, setSellFrom] = useState(newGetProd);
	const [getSellProd, setGetSellProd] = useState(JSON.parse(localStorage.getItem('sellProducts')))

	const handleChange = (e, type) => {
		const {value} = e.target
		setSellFrom((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
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
							<input
								name={input.name}
								type={input.type}
								onChange={(e) => handleChange(e, input.name)}
								className="modal__input"
								placeholder={input.placeholder}
								value={sellForm[input.name]}
							/>
						</div>
					))}
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" className="modal__btn" onClick={(e) => {
						e.preventDefault();
						onHide()
						getSellProd.push(sellForm);
						localStorage.setItem('sellProducts', JSON.stringify(getSellProd))
						const newProd = getProd.filter(el => el.id !== productId.productId)
						setGetProd(newProd)
						localStorage.setItem('products', JSON.stringify(newProd))
					}}>
						<span className="modal__btn-text">{info.buttonText}</span>
						<ReactSVG className="modal__btn-icon" src={info.buttonIcon}/>
					</Button>
				</Modal.Footer>
			</form>
		</Modal>
	)
}

export default MySellModal;