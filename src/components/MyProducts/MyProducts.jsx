import React, {useState} from "react";
import {Button, Modal, Table} from "react-bootstrap";
import {ReactSVG} from "react-svg";

import ButtonCreate from "../ButtonCreate";
import MyModal from "../MyModal";
import MainTitle from "../MainTitle";

import del from "../../assets/images/Delete.svg";
import edit from "../../assets/images/edit.svg";
import plus from '../../assets/images/plus.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyProducts.scss';


const MyProducts = (props) => {
	const [modalCreateShow, setModalCreateShow] = React.useState(false);
	const [modalShow, setModalShow] = React.useState(false);
	const [modalEditShow, setModalEditShow] = React.useState(false);


	const myProductsProps = {
		title: "My product",
		description: "Product table"
	}

	const tableTitles = [
		'Product name',
		'Store',
		'Address',
		'Category',
		'Creation date',
		'Price',
		'Remains',
		'Weight / Volume',
		'Actions'
	]

	const getProd = JSON.parse(localStorage.getItem('products'))

	const modalCreate = {
		title: 'Create a product',
		buttonIcon: {plus},
		buttonText: 'Add product',
		inputs: [
			{
				value: '',
				type: 'text',
				placeholder: 'Store',
				name: 'storeName',
			},
			{
				value: '',
				type: 'text',
				placeholder: 'Price',
				name: 'price',
			},
			{
				value: '',
				type: 'text',
				placeholder: 'Product name',
				name: 'productName',
			},
			{
				value: '',
				type: 'text',
				placeholder: 'Product Category',
				name: 'productCategory',
			},
			{
				value: '',
				type: 'text',
				placeholder: 'Quantity of goods',
				name: 'quantity',
			},
			{
				value: '',
				type: 'text',
				placeholder: 'Weight / Volume of one item',
				name: 'weight',
			},
		]
	}

	const modalSell = {
		title: 'Sell the product',
		buttonIcon: '',
		buttonText: 'Sell product',
		inputs: [
			{
				type: 'text',
				placeholder: 'Numbers of product'
			},
			{
				type: 'text',
				placeholder: 'Date of sale'
			},
		]
	}

	const modalEdit = {
		title: 'Editing a product',
		buttonIcon: '',
		buttonText: 'Save changes',
		inputs: [
			{
				type: 'text',
				placeholder: 'Store',
			},
			{
				type: 'text',
				placeholder: 'Price'
			},
			{
				type: 'text',
				placeholder: 'Product name'
			},
			{
				type: 'text',
				placeholder: 'Product Category'
			},
			{
				type: 'text',
				placeholder: 'Quantity of goods'
			},
			{
				type: 'text',
				placeholder: 'Weight / Volume of one item'
			},
		]
	}

	const getCurrentDate = (date) => {
		const newDate = new Date(date);
		let day = newDate.getDay();
		let month = newDate.getMonth();
		let year = newDate.getFullYear();
		if(day < 10) {
			day = '0' + day;
		}
		if(month < 10) {
			month = '0' + month;
		}
		return `${day}.${month}.`
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
						{tableTitles.map((title) => (
							<th>{title}</th>
						))}
					</tr>
					</thead>
					<tbody>
					{getProd.map((product, index) => (
						<tr data-key={index}>
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
									<button className="table__actions-sell" onClick={() => setModalShow(true)}>Sell</button>

									<button className="table__actions-edit" onClick={() => setModalEditShow(true)}>
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