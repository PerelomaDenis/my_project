import React, {useCallback, useEffect, useState} from "react";
import {Button, Offcanvas, Table} from "react-bootstrap";
import {ReactSVG} from "react-svg";


import ButtonCreate from "../ButtonCreate";
import MyCreateModal from "../MyCreateModal";
import MainTitle from "../MainTitle";
import MySellModal from "../MySellModal";
import MyEditModal from "../MyEditModal";
import Sidebar from "../Sidebar";

import del from "../../assets/images/Delete.svg";
import edit from "../../assets/images/edit.svg";
import menu from "../../assets/images/menu.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyProducts.scss';
import {modalCreate, modalEdit, modalSell, myProductsProps, tableMyProductTitles} from "../../services/mock";
import {getAll, getById, getOneUser, removeProduct} from "../../services/ajaxUser";


export const getCurrentDate = (date) => {
	const newDate = new Date(date);
	let day = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();
	if (day < 10) day = '0' + day;
	if (month < 10) month = '0' + month;
	return `${day}.${month}.${year}`
}

const MyProducts = ({changeIsReg, removeToken}) => {
	const [getProd, setGetProd] = useState([])
	const [modalCreateShow, setModalCreateShow] = useState(false);
	const [modalShow, setModalShow] = useState(false);
	const [modalId, setModalId] = useState('');
	const [modalEditShow, setModalEditShow] = useState(false);
	const [getUser, setGetUser] = useState({})
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	const handleShow = (e) => {
		e.preventDefault();
		setShow(true);
	}

	const getProductsCall = useCallback(
		() => {
			getAll()
				.then(data => {
					setGetProd(data)
				})
		}, [])

	const getMyUser = useCallback(
		() => {
			getOneUser()
				.then(data => {
					setGetUser(data)
				})
		}, [])

	useEffect(() => {
		getProductsCall()
		getMyUser()
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
						<MainTitle title={myProductsProps.title} description={myProductsProps.description}/>
						<Button className="button" variant="primary" onClick={() => setModalCreateShow(true)}>
							<ButtonCreate/>
						</Button>
					</div>
					<hr/>
					<div className="wrap__content">
						{getProd.length === 0 ? (
							<div className="no-data">
								<p>No data</p>
							</div>
						) : (
							<Table striped borderless responsive="md">
								<thead>
								<tr>
									{tableMyProductTitles.map((title) => (
										<th>{title}</th>
									))}
								</tr>
								</thead>
								<tbody>
								{
									getProd.map((product) => (
										<tr id={product._id}>
											<td>{product.productName}</td>
											<td>{product.store}</td>
											<td>{getUser.address}</td>
											<td>{product.productCategory}</td>
											<td>{getCurrentDate(product.createDate)}</td>
											<td>{product.price}</td>
											<td>{product.quantity}</td>
											<td>{product.weight}</td>
											<td>
												<div className="table__actions">
													<button className="table__actions-sell" onClick={() => {
														setModalId(product._id)
														setModalShow(true)
													}}>Sell
													</button>
													<button className="table__actions-edit" onClick={() => {
														setModalId(product._id)
														setModalEditShow(true)
													}}>
														<ReactSVG src={edit}/>
													</button>
													<ReactSVG className="table__actions-del" src={del}
																		onClick={(e) => removeProduct(product._id)}/>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						)}
						{modalShow && (
							<MySellModal
								info={modalSell}
								show={modalShow}
								onHide={() => setModalShow(false)}
								productId={modalId}
								setGetProd={setGetProd}
								getProd={getProd}
							/>
						)}

						{modalEditShow && (
							<MyEditModal
								info={modalEdit}
								show={modalEditShow}
								onHide={() => setModalEditShow(false)}
								productId={modalId}
								setGetProd={setGetProd}
								getProd={getProd}
							/>
						)}

						{modalCreateShow && (
							<MyCreateModal
								info={modalCreate}
								show={modalCreateShow}
								onHide={() => setModalCreateShow(false)}
								getProd={getProd}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyProducts;