import './SidebarLink.scss';
import {Link} from "react-router-dom";
import {ReactSVG} from "react-svg";

const SidebarLink = (props) => {
	return (
		<li className="sidebar__links-item">
			<ReactSVG className="sidebar__links-icon" src={props.icon} />
			<Link className="sidebar__links-text" to="/">{props.name}</Link>
		</li>
	)
}

export default SidebarLink;