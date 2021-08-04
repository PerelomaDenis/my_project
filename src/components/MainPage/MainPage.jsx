import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import ButtonCreate from "../ButtonCreate";
import MyModal from "../MyModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.scss';
import MainTitle from "../MainTitle";

const MainPage = (props) => {
	const [modalShow, setModalShow] = React.useState(false);

	const mainPageProps = {
		title: "Sales statistics",
		description: "Welcome to CRM dashboard"
	}

	return (
		<div className="wrap">
			<div className="wrap__top">
				<MainTitle title={mainPageProps.title} description={mainPageProps.description}/>
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