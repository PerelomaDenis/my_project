import React from "react";

import './FormInput.scss';

const FormInput = ({
	 id,
	 type,
	 placeholder,
	 value,
	 onChange,
	 label}) => {
	return (
		<div className="personal-form__item">
			<label className="personal-form__item-title" htmlFor={id}>{label}</label>
			<input
				 className="personal-form__item-input"
				 type={type}
				 id={id}
				 name={id}
				 placeholder={placeholder}
				 value={value}
				 onChange={onChange}
			/>
		</div>
	)
}
export default FormInput;