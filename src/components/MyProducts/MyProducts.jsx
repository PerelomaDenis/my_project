import React, {useState} from "react";
import {Button, Modal, Table} from "react-bootstrap";
import {ReactSVG} from "react-svg";
import ButtonCreate from "../ButtonCreate";
import MyModal from "../MyModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyProducts.scss';
import MainTitle from "../MainTitle";
import buttonIcon from "../../assets/images/button-icon.svg";
import del from "../../assets/images/Delete.svg";
import edit from "../../assets/images/edit.svg";
import SidebarLink from "../Sidebar/SidebarLink";
import plus from '../../assets/images/plus.svg';



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

	const products = [
		{
			productName: 'Sneakers',
			store: 'Adidas',
			address: 'Taganrog',
			category: 'Sportswear',
			createDate: '04.08.2021',
			price: '$1 000',
			remains: '40',
			weight: '5kg',
		},
		{
			productName: 'Mars',
			store: 'Nike',
			address: 'Moscow',
			category: 'Food',
			createDate: '03.08.2021',
			price: '$ 100',
			remains: '30',
			weight: '4kg',
		},
		{
			productName: 'Twix',
			store: 'Reebok',
			address: 'Rostov',
			category: 'Sportswear',
			createDate: '02.08.2021',
			price: '$ 10',
			remains: '20',
			weight: '3kg',
		}
	]

	const modalCreate = {
		title: 'Create a product',
		buttonIcon: {plus},
		buttonText: 'Add product',
		inputs: [
			{
				type: 'text',
				placeholder: 'Store'
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
				placeholder: 'Store'
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

	return (
		<div className="wrap">
			<div className="wrap__top">
				<MainTitle title={myProductsProps.title} description={myProductsProps.description}/>
				<Button className="button" variant="primary" onClick={() => setModalCreateShow(true)}>
					<ButtonCreate />
				</Button>
				<MyModal
					info={modalCreate}
					show={modalCreateShow}
					onHide={() => setModalCreateShow(false)}
				/>
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
						{products.map((product) => (
							<tr>
								<td>{product.productName}</td>
								<td>{product.store}</td>
								<td>{product.address}</td>
								<td>{product.category}</td>
								<td>{product.createDate}</td>
								<td>{product.price}</td>
								<td>{product.remains}</td>
								<td>{product.weight}</td>
								<td>
									<div className="table__actions">
										<button className="table__actions-sell" onClick={() => setModalShow(true)}>Sell</button>

										<button className="table__actions-edit" onClick={() => setModalEditShow(true)}>
											<ReactSVG className="" src={edit} />
										</button>
										<ReactSVG className="table__actions-del" src={del} />
									</div>
								</td>
							</tr>
						))}
						<MyModal
							info={modalSell}
							show={modalShow}
							onHide={() => setModalShow(false)}
						/>
						<MyModal
							info={modalEdit}
							show={modalEditShow}
							onHide={() => setModalEditShow(false)}
						/>
					</tbody>
				</Table>
			</div>
		</div>
	)
}

export default MyProducts;