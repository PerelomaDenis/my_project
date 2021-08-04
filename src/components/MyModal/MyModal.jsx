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
					{props.info.title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{props.info.inputs.map((input) => (
					<div>
						<input type={input.type} className="modal__input" value="" placeholder={input.placeholder}/>
					</div>
				))}
			</Modal.Body>
			<Modal.Footer>
				<Button className="modal__btn" onClick={props.onHide}>
					<span className="modal__btn-text">{props.info.buttonText}</span>
					<ReactSVG className="modal__btn-icon" src={props.info.buttonIcon} />
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default MyModal;