import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Personal.scss';
import MainTitle from "../MainTitle";
import ButtonCreate from "../ButtonCreate";
import MyModal from "../MyModal";


const Personal = (props) => {
	const [modalShow, setModalShow] = React.useState(false);

	const personalProps = {
		title: "Personal Cabinet",
		description: "Information about your account"
	}

	return (
		<div className="wrap">
			<div className="wrap__top">
				<MainTitle title={personalProps.title} description={personalProps.description}/>
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

export default Personal;