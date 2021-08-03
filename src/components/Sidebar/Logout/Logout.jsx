import './Logout.scss';
import {Link} from "react-router-dom";
import {ReactSVG} from "react-svg";
import log from '../../../assets/images/log.svg';

const Logout = (props) => {
	return (
		<li className="sidebar__links-item">
			<ReactSVG className="sidebar__links-icon" src={log} />
			<Link className="sidebar__links-text" to="/">Logout</Link>
		</li>
	)
}

export default Logout;