import './Logout.scss';
import {Link, NavLink} from "react-router-dom";
import {ReactSVG} from "react-svg";
import log from '../../../assets/images/log.svg';

const Logout = (props) => {
	return (
		<NavLink className="sidebar__link" to="/">
			<li className="sidebar__links-item">
				<ReactSVG className="sidebar__links-icon" src={log} />
				<span className="sidebar__links-text">Logout</span>
			</li>
		</NavLink>
	)
}

export default Logout;