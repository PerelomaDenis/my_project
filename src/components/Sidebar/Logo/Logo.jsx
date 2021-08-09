import React from "react";

import './Logo.scss';
import logo from '../../../assets/images/Logo.png';

const Logo = () => {
	return (
		<div className="logo">
			<img src={logo}/>
		</div>
	)
}

export default Logo;