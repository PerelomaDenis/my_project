import React from "react";
import {Button} from "react-bootstrap";

import ButtonCreate from "../ButtonCreate";
import MyCreateModal from "../MyCreateModal";
import MainTitle from "../MainTitle";
import ChartPie from "../Charts/ChartPie";
import ChartBar from "../Charts/ChartBar";
import ChartLine from "../Charts/ChartLine/ChartLine";

import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.scss';
import {mainPageProps, modalCreate} from "../../services/mock";



const MainPage = () => {
	const [modalCreateShow, setModalCreateShow] = React.useState(false);
	const getSellProd = JSON.parse(localStorage.getItem('sellProducts'))

	return (
		<div className="wrap">
			<div className="wrap__top">
				<MainTitle title={mainPageProps.title} description={mainPageProps.description}/>
				<Button className="button" variant="primary" onClick={() => setModalCreateShow(true)}>
					<ButtonCreate/>
				</Button>

			</div>
			<hr/>
			<div className="wrap__content">
				<div className="graphs">
					<div className="graph-1 graph">
						{getSellProd.length === 0 ? (
							<div className="no-data">
								<p>No data</p>
							</div>
						) : (
							<ChartPie/>
						)}
					</div>
					<div className="graph-2 graph">
						{getSellProd.length === 0 ? (
							<div className="no-data">
								<p>No data</p>
							</div>
						) : (
							<ChartLine/>
						)}
					</div>
					<div className="graph-3 graph">
						{getSellProd.length === 0 ? (
							<div className="no-data">
								<p>No data</p>
							</div>
						) : (
							<ChartBar/>
						)}
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