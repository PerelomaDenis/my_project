import React from "react";
import {ReactSVG} from "react-svg";
import buttonIcon from '../../assets/images/button-icon.svg';
import './ButtonCreate.scss';

const ButtonCreate = (props) => {
	return (
		<div className="button__wrap">
				<ReactSVG className="button__icon" src={buttonIcon} />
				<span className="button__text">Create a product</span>
		</div>
	)
}

export default ButtonCreate;