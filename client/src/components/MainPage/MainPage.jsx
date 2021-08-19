import React, {useCallback, useEffect, useState} from "react";
import {Button, Offcanvas} from "react-bootstrap";

import ButtonCreate from "../ButtonCreate";
import MyCreateModal from "../MyCreateModal";
import MainTitle from "../MainTitle";
import ChartPie from "../Charts/ChartPie";
import ChartBar from "../Charts/ChartBar";
import ChartLine from "../Charts/ChartLine/ChartLine";

import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.scss';
import {mainPageProps, modalCreate} from "../../services/mock";
import {ReactSVG} from "react-svg";
import menu from "../../assets/images/menu.svg";
import Sidebar from "../Sidebar";
import {getAllSales} from "../../services/ajaxUser";


const MainPage = ({changeIsReg, removeToken, getUser, setGetUser}) => {
	const [modalCreateShow, setModalCreateShow] = React.useState(false);
	const [getProd, setGetProd] = useState([])
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = (e) => {
		e.preventDefault();
		setShow(true);
	}


	const getMySales = useCallback(
		() => {
			getAllSales()
				.then(data => {
					setGetProd(data)
				})
		}, [])

	useEffect(() => {
		getMySales()
	}, [])

	return (
		<div className="page">
			<div className="sidebar">
				<Sidebar changeIsReg={changeIsReg} removeToken={removeToken}/>
			</div>
			<div className="main">
				<div className="wrap">
					<div className="wrap__top">
						<div className="wrap__top-mobile">
							<ReactSVG className="" src={menu} onClick={handleShow}/>
							<Offcanvas show={show} onHide={handleClose}>
								<Offcanvas.Header closeButton>
								</Offcanvas.Header>
								<Offcanvas.Body>
									<Sidebar changeIsReg={changeIsReg} removeToken={removeToken}/>
								</Offcanvas.Body>
							</Offcanvas>
						</div>
						<MainTitle title={mainPageProps.title} description={mainPageProps.description}/>
						<Button className="button" variant="primary" onClick={() => setModalCreateShow(true)}>
							<ButtonCreate/>
						</Button>

					</div>
					<hr/>
					<div className="wrap__content">
						<div className="graphs">
							<div className="graph-1 graph">
								{getProd.length === 0 ? (
									<div className="no-data">
										<p>No data</p>
									</div>
								) : (
									<ChartPie getProd={getProd}/>
								)}
							</div>
							<div className="graph-2 graph">
								{getProd.length === 0 ? (
									<div className="no-data">
										<p>No data</p>
									</div>
								) : (
									<ChartLine getProd={getProd}/>
								)}
							</div>
							<div className="graph-3 graph">
								{getProd.length === 0 ? (
									<div className="no-data">
										<p>No data</p>
									</div>
								) : (
									<ChartBar getProd={getProd}/>
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
			</div>
		</div>
	)
}

export default MainPage;