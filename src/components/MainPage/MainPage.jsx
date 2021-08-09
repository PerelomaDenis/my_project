import React from "react";
import {Button, Modal} from "react-bootstrap";

import ButtonCreate from "../ButtonCreate";
import MyCreateModal from "../MyCreateModal";
import MainTitle from "../MainTitle";

import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.scss';
import {mainPageProps, modalCreate} from "../../services/mock";


const MainPage = () => {
	const [modalCreateShow, setModalCreateShow] = React.useState(false);

	return (
		<div className="wrap">
			<div className="wrap__top">
				<MainTitle title={mainPageProps.title} description={mainPageProps.description}/>
				<Button className="button" variant="primary" onClick={() => setModalCreateShow(true)}>
					<ButtonCreate />
				</Button>

			</div>
			<hr/>
			<div className="wrap__content">
				<div className="graphs">
					<div className="graph-1 graph">
						<div className="no-data">
							<p>No data</p>
						</div>
					</div>
					<div className="graph-2 graph">
						<div className="no-data">
							<p>No data</p>
						</div>
					</div>
					<div className="graph-3 graph">
						<div className="no-data">
							<p>No data</p>
						</div>
					</div>
				</div>
				{modalCreateShow && (
					<MyCreateModal
						info={modalCreate}
						show={modalCreateShow}
						onHide={() => setModalCreateShow(false)}
					/>
				)}
			</div>
		</div>
	)
}

export default MainPage;