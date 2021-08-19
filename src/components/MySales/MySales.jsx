import React, {useState} from "react";
import {Button, Modal, Offcanvas, Table} from "react-bootstrap";

import ButtonCreate from "../ButtonCreate";
import MyCreateModal from "../MyCreateModal";
import MainTitle from "../MainTitle";

import 'bootstrap/dist/css/bootstrap.min.css';
import './MySales.scss';
import {modalCreate, mySalesProps, tableMySalesTitles} from "../../services/mock";
import {getCurrentDate} from "../MyProducts/MyProducts";
import {ReactSVG} from "react-svg";
import menu from "../../assets/images/menu.svg";
import Sidebar from "../Sidebar";


const MySales = ({changeIsReg, changeIsLoin}) => {
	const [modalCreateShow, setModalCreateShow] = useState(false);
	const [getUsers, setGetUsers] = useState(JSON.parse(localStorage.getItem('users')))
	const userId = JSON.parse(localStorage.getItem('userId'));
	const getUser = getUsers.filter((user) => user.id === userId)[0]

	const getSellProd = JSON.parse(localStorage.getItem('sellProducts'))
	const [getProd, setGetProd] = useState(JSON.parse(localStorage.getItem('products')))
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
							<Sidebar changeIsReg={changeIsReg} changeIsLoin={changeIsLoin}/>
						</Offcanvas.Body>
					</Offcanvas>
				</div>
				<MainTitle title={mySalesProps.title} description={mySalesProps.description}/>
				<Button className="button" variant="primary" onClick={() => setModalCreateShow(true)}>
					<ButtonCreate />
				</Button>

			</div>
			<hr/>
			<div className="wrap__content">
				{getSellProd.length === 0 ? (
					<div className="no-data">
						<p>No data</p>
					</div>
				) : (
				<Table striped borderless responsive="md">
					<thead>
					<tr>
						{tableMySalesTitles.map((title) => (
							<th>{title}</th>
						))}
					</tr>
					</thead>
					<tbody>
					{getSellProd.map((product) => (
						<tr>
							<td>{product.productName}</td>
							<td>{product.storeName}</td>
							<td>{getUser.address}</td>
							<td>{product.productCategory}</td>
							<td>{getCurrentDate(product.createDate)}</td>
							<td>{product.price}</td>
							<td>{product.sellQuantity}</td>
							<td>{product.weight}</td>
							<td>{product.saleDate}</td>
						</tr>
					))}

					</tbody>
				</Table>
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

export default MySales;