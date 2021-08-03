import './Sidebar.scss';
import {Link} from "react-router-dom";
import Logo from "./Logo";
import doc from '../../assets/images/doc.svg';
import home from '../../assets/images/home.svg';
import sales from '../../assets/images/perc.svg';
import user from '../../assets/images/user.svg';
import SidebarLink from "./SidebarLink";
import Logout from "./Logout";

const Sidebar = (props) => {
	const links = [
		{
			name: 'Main page',
			icon: home
		},
		{
			name: 'My Products',
			icon: doc
		},
		{
			name: 'My sales',
			icon: sales
		},
		{
			name: 'Personal Cabinet',
			icon: user
		},
	];

	return (
		<div className="sidebar__content">
			<Logo />
			<ul className="sidebar__links-list">
				<li>
					<ul>
						{links.map((link) => (
							<SidebarLink icon={link.icon} name={link.name}/>
						))}
					</ul>
				</li>
				<li>
					<hr/>
					<Logout />
				</li>
			</ul>

		</div>
	)
}

export default Sidebar;