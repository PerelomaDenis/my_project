import React from "react";
import {Button, Modal, Table} from "react-bootstrap";
import {ReactSVG} from "react-svg";

import ButtonCreate from "../ButtonCreate";
import MyModal from "../MyModal";
import MainTitle from "../MainTitle";

import del from "../../assets/images/Delete.svg";
import edit from "../../assets/images/edit.svg";

import 'bootstrap/dist/css/bootstrap.min.css';
import './MyProducts.scss';
import {modalCreate, modalEdit, modalSell, myProductsProps, tableMyProductTitles} from "../../services/mock";


const MyProducts = (props) => {
	const [modalCreateShow, setModalCreateShow] = React.useState(false);
	const [modalShow, setModalShow] = React.useState(false);
	const [modalEditShow, setModalEditShow] = React.useState(false);

	const getProd = JSON.parse(localStorage.getItem('products'))

	const getCurrentDate = (date) => {
		const newDate = new Date(date);
		let day = newDate.getDay() + 1;
		let month = newDate.getMonth() + 1;
		let year = newDate.getFullYear();
		if(day < 10) day = '0' + day;
		if(month < 10) month = '0' + month;
		return `${day}.${month}.${year}`
	}

	const editValuesGood = () => {
		console.log(123)
	}

	return (
		<div className="wrap">
			<div className="wrap__top">
				<MainTitle title={myProductsProps.title} description={myProductsProps.description}/>
				<Button className="button" variant="primary" onClick={() => setModalCreateShow(true)}>
					<ButtonCreate/>
				</Button>
			</div>
			<hr/>
			<div className="wrap__content">
				<Table striped borderless>
					<thead>
					<tr>
						{tableMyProductTitles.map((title) => (
							<th>{title}</th>
						))}
					</tr>
					</thead>
					<tbody>
					{getProd.map((product, index) => (
						<tr id={product.id}>
							<td>{product.productName}</td>
							<td>{product.storeName}</td>
							<td>{product.address}</td>
							<td>{product.productCategory}</td>
							<td>{getCurrentDate(product.createDate)}</td>
							<td>{product.price}</td>
							<td>{product.quantity}</td>
							<td>{product.weight}</td>
							<td>
								<div className="table__actions">
									<button className="table__actions-sell" onClick={() => {
											setModalShow(true)
										}
									}>Sell</button>

									<button className="table__actions-edit" onClick={() => {
											setModalEditShow(true)
											editValuesGood()
										}
									}>
										<ReactSVG className="" src={edit}/>
									</button>
									<ReactSVG className="table__actions-del" src={del}/>
								</div>
							</td>
						</tr>
					))}
					</tbody>
				</Table>

				{modalShow && (
					<MyModal
						info={modalSell}
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
				)}

				{modalEditShow && (
					<MyModal
						info={modalEdit}
						show={modalEditShow}
						onHide={() => setModalEditShow(false)}
					/>
				)}

				{modalCreateShow && (
					<MyModal
						info={modalCreate}
						show={modalCreateShow}
						onHide={() => setModalCreateShow(false)}
					/>
				)}
			</div>
		</div>
	)
}

export default MyProducts;