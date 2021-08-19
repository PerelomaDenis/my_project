import React from "react";
import {NavLink} from "react-router-dom";
import {ReactSVG} from "react-svg";

import './Logout.scss';
import log from '../../../assets/images/log.svg';

const Logout = ({changeIsReg, changeIsLoin}) => {

	return (
		<NavLink className="sidebar__link" to="/" onClick={(e) => {
			localStorage.setItem('isReg', JSON.stringify(false));
			localStorage.setItem('isLogin', JSON.stringify(false));
			changeIsReg(false);
			changeIsLoin(false)
			localStorage.setItem('userId', JSON.stringify(''));
		}}>
			<li className="sidebar__links-item">
				<ReactSVG className="sidebar__links-icon" src={log} />
				<span className="sidebar__links-text">Logout</span>
			</li>
		</NavLink>
	)
}

export default Logout;