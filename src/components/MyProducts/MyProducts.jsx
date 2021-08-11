import React, {useState} from "react";
import {Button, Offcanvas, Table} from "react-bootstrap";
import {ReactSVG} from "react-svg";


import ButtonCreate from "../ButtonCreate";
import MyCreateModal from "../MyCreateModal";
import MainTitle from "../MainTitle";
import MySellModal from "../MySellModal";
import MyEditModal from "../MyEditModal";
import Logo from "../Sidebar/Logo";
import Sidebar from "../Sidebar";

import del from "../../assets/images/Delete.svg";
import edit from "../../assets/images/edit.svg";
import menu from "../../assets/images/menu.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyProducts.scss';
import {modalCreate, modalEdit, modalSell, myProductsProps, tableMyProductTitles} from "../../services/mock";


export const getCurrentDate = (date) => {
	const newDate = new Date(date);
	let day = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();
	if(day < 10) day = '0' + day;
	if(month < 10) month = '0' + month;
	return `${day}.${month}.${year}`
}

const MyProducts = () => {
	const [modalCreateShow, setModalCreateShow] = useState(false);
	const [modalShow, setModalShow] = useState(false);
	const [modalId, setModalId] = useState({productId: ''});
	const [modalEditShow, setModalEditShow] = useState(false);
	const [getProd, setGetProd] = useState(JSON.parse(localStorage.getItem('products')))
	const [getUsers, setGetUsers] = useState(JSON.parse(localStorage.getItem('users')))
	const userId = JSON.parse(localStorage.getItem('userId'));
	const getUser = getUsers.filter((user) => user.id === userId)[0]

	const removeProduct = (id) => {
		const newProd = getProd.filter(el => el.id !== id)
		setGetProd(newProd)
		localStorage.setItem('products', JSON.stringify(newProd))
	}

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = (e) => {
		e.preventDefault();
		setShow(true);
	}

	return (
		<div className="wrap">
			<div className="wrap__top">
				<div className="wrap__top-mobile">
					<ReactSVG className="" src={menu} onClick={handleShow}/>
					<Offcanvas show={show} onHide={handleClose}>
						<Offcanvas.Header closeButton>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Sidebar />
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
					<Table striped borderless responsive="sm">
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
							<tr id={product.id}>
								<td>{product.productName}</td>
								<td>{product.storeName}</td>
								<td>{getUser.address}</td>
								<td>{product.productCategory}</td>
								<td>{getCurrentDate(product.createDate)}</td>
								<td>{product.price}</td>
								<td>{product.quantity}</td>
								<td>{product.weight}</td>
								<td>
									<div className="table__actions">
										<button className="table__actions-sell" onClick={() => {
											setModalShow(true)
											setModalId({productId: product.id})
										}}>Sell</button>
										<button className="table__actions-edit" onClick={() => {
											setModalEditShow(true)
											setModalId({productId: product.id})
										}}>
											<ReactSVG className="" src={edit}/>
										</button>
										<ReactSVG className="table__actions-del" src={del} onClick={(e) => {removeProduct(product.id)}}/>
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
	)
}

export default MyProducts;