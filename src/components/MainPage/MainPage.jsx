import './MainPage.scss';
import {ReactSVG} from "react-svg";
import buttonIcon from '../../assets/images/button-icon.svg';

const MainPage = (props) => {
	return (
		<div className="wrap">
			<div className="wrap__top">
				<div className="title">
					<div className="title__text">Sales statistics</div>
					<div className="title__desc">Welcome to CRM dashboard</div>
				</div>
				<div className="button">
					<button>
						<ReactSVG className="button__icon" src={buttonIcon} />
						<span className="button__text">Create a product</span>
					</button>
				</div>
			</div>
			<hr/>
			<div className="wrap__content">
				<div className="graphs">
					<div className="graph-1 graph">

					</div>
					<div className="graph-2 graph">

					</div>
					<div className="graph-3 graph">

					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPage;