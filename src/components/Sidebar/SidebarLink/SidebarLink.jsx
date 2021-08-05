import React from "react";
import {NavLink} from "react-router-dom";
import {ReactSVG} from "react-svg";

import './SidebarLink.scss';


const SidebarLink = (props) => {
	return (
		<NavLink exact activeClassName="selected" className="sidebar__link" to={props.url}>
			<li className="sidebar__links-item">
				<ReactSVG className="sidebar__links-icon" src={props.icon} />
				<span className="sidebar__links-text">{props.name}</span>
			</li>
		</NavLink>
	)
}

export default SidebarLink;