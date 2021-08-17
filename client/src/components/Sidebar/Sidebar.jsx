import React, {useState} from "react";

import SidebarLink from "./SidebarLink";
import Logout from "./Logout";
import Logo from "./Logo";

import './Sidebar.scss';
import {links} from "../../services/mock";


const Sidebar = ({changeIsReg, removeToken}) => {
	// const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')) || false)
	// const [isReg, setIsReg] = useState(JSON.parse(localStorage.getItem('isReg')) || false)
	// const changeIsLoin = (value) => {
	// 	setIsLogin(value)
	// }
	//
	// const changeIsReg = (value) => {
	// 	setIsReg(value)
	// }

	return (
		<div className="sidebar__content">
			<Logo />
			<ul className="sidebar__links-list">
				<li>
					<ul>
						{links.map((link) => (
							<SidebarLink icon={link.icon} name={link.name} url={link.url}/>
						))}
					</ul>
				</li>
				<li>
					<hr/>
					<Logout changeIsReg={changeIsReg} removeToken={removeToken}/>
				</li>
			</ul>

		</div>
	)
}

export default Sidebar;