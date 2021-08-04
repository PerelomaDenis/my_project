import './MyModal.scss';
import {ReactSVG} from "react-svg";
import plus from '../../assets/images/plus.svg';
import {Button, Modal} from "react-bootstrap";
import React from "react";

const MyModal = (props) => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			className="modal-window"
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Create a product
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div>
					<input type="text" className="modal__input" value="" placeholder="Store"/>
				</div>
				<div>
					<input type="text" className="modal__input" value="" placeholder="Price"/>
				</div>
				<div>
					<input type="text" className="modal__input" value="" placeholder="Product name"/>
				</div>
				<div>
					<input type="text" className="modal__input" value="" placeholder="Product Category"/>
				</div>
				<div>
					<input type="text" className="modal__input" value="" placeholder="Quantity of goods"/>
				</div>
				<div>
					<input type="text" className="modal__input" value="" placeholder="Weight / Volume of one item"/>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button className="modal__btn" onClick={props.onHide}>
					<span className="modal__btn-text">Add product</span>
					<ReactSVG className="modal__btn-icon" src={plus} />
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default MyModal;