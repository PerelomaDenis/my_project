import React, {useState} from "react";

import SidebarLink from "./SidebarLink";
import Logout from "./Logout";
import Logo from "./Logo";

import './Sidebar.scss';
import {links} from "../../services/mock";


const Sidebar = ({ removeToken}) => {
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
					<Logout removeToken={removeToken}/>
				</li>
			</ul>

		</div>
	)
}

export default Sidebar;