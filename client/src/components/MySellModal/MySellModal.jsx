import React, {useCallback, useState} from "react";
import {ReactSVG} from "react-svg";
import {Button, Modal} from "react-bootstrap";

import './MySellModal.scss';
import {errorClass, validateField} from "../../services/valid";
import {addSaleProduct, removeProduct, updateProduct} from "../../services/ajaxUser";

const MySellModal = (
	{
		info,
		onHide,
		show,
		productId,
		getProd,
		setGetProd
	}) => {
	const [isFormValid, setFormIsValid] = useState(true)
	const [isValid, setIsValid] = useState({
		saleDateValid: true,
		sellQuantityValid: true
	})

	const newGetProd = getProd.filter((el) => el._id === productId)
	const [sellForm, setSellFrom] = useState(newGetProd[0]);
	const [getSellProd, setGetSellProd] = useState([])
	const handleChange = (e, type) => {
		const {value} = e.target
		setSellFrom((prevForm) => ({
			...prevForm,
			[type]: value,
		}))
		validateField(type, value, isValid, setIsValid, sellForm)
	}

	const updateMyProduct = useCallback(
		(id, data) => {
			updateProduct(id, data)
		}, [])

console.log('========>sellForm', sellForm);
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
								value={sellForm[input.name]}
							/>
							{errorClass(isValid[input.errorValid]) && (<div className="error-text">{input.errorText}</div>)}
						</div>
					))}
					{!isFormValid && (<div className="error__text">The entered quantity of goods is higher than the stock balance</div>)}
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" className="modal__btn" onClick={(e) => {
						e.preventDefault();
						let values = Object.values((isValid));
						if (values.includes(false) || values.includes('')) {

						} else {
							setFormIsValid(true)

							const dif = sellForm.quantity - sellForm.sellQuantity;
							console.log('========>dif', dif);
							if (dif === 0) {

								sellForm.quantity = dif;
								setFormIsValid(true)
								const newProds = getProd.filter(el => el._id !== productId)
								setGetProd(newProds)
								console.log('========>newProds', newProds);
								removeProduct(productId)
								addSaleProduct(sellForm)
								console.log('========>sellForm', sellForm);
								// localStorage.setItem('products', JSON.stringify(newProd))
								// getSellProd.push(sellForm);
								// localStorage.setItem('sellProducts', JSON.stringify(getSellProd))
								onHide()
							}
							if (dif < 0) {
								setFormIsValid(false)
							}
							if(dif > 0){
								sellForm.quantity = dif;
								// getSellProd.push(sellForm);
								// localStorage.setItem('sellProducts', JSON.stringify(getSellProd))
								addSaleProduct(sellForm)
								updateMyProduct(sellForm._id, {quantity: sellForm.quantity})
								setFormIsValid(true)
								const newChangedProd = getProd.map((prod) => {
									if (prod._id === productId) {
										prod = {...sellForm}
										return prod
									}
									return prod
								})
								onHide()
								setGetProd(newChangedProd)

								// localStorage.setItem('products', JSON.stringify(newChangedProd))
							}
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

export default MySellModal;