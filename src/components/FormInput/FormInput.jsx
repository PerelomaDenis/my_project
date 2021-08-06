import React from "react";

import './FormInput.scss';

const FormInput = (props) => {
	return (
		<div className="personal-form__item">
			<label className="personal-form__item-title" htmlFor={props.id}>{props.label}</label>
			<input className="personal-form__item-input"
						 type={props.type}
						 id={props.id}
						 name={props.id}
						 placeholder={props.placeholder}/>
						 value={props.value}
			 			 onChange={props.onChange}
		</div>
	)
}
export default FormInput;