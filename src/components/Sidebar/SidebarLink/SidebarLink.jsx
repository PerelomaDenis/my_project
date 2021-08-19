import React from "react";
import {NavLink} from "react-router-dom";
import {ReactSVG} from "react-svg";

import './SidebarLink.scss';


const SidebarLink = (
	{
		url,
		icon,
		name
	}) => {
	return (
		<NavLink exact activeClassName="selected" className="sidebar__link" to={url}>
			<li className="sidebar__links-item">
				<ReactSVG className="sidebar__links-icon" src={icon} />
				<span className="sidebar__links-text">{name}</span>
			</li>
		</NavLink>
	)
}

export default SidebarLink;