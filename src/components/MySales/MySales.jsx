import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import ButtonCreate from "../ButtonCreate";
import MyModal from "../MyModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MySales.scss';
import {ReactSVG} from "react-svg";
import buttonIcon from "../../assets/images/button-icon.svg";
import plus from "../../assets/images/plus.svg";
import MainTitle from "../MainTitle";



const MySales = (props) => {
	const [modalShow, setModalShow] = React.useState(false);

	const mySalesProps = {
		title: "My sales",
		description: "Sales table"
	}

	return (
		<div className="wrap">
			<div className="wrap__top">
				<MainTitle title={mySalesProps.title} description={mySalesProps.description}/>
				<Button className="button" variant="primary" onClick={() => setModalShow(true)}>
					<ButtonCreate />
				</Button>
				<MyModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</div>
			<hr/>
			<div className="wrap__content">

			</div>
		</div>
	)
}

export default MySales;