import React from "react";
import {Button, Modal, Table} from "react-bootstrap";

import ButtonCreate from "../ButtonCreate";
import MyModal from "../MyModal";
import MainTitle from "../MainTitle";

import 'bootstrap/dist/css/bootstrap.min.css';
import './MySales.scss';
import {modalCreate, mySalesProps, tableMySalesTitles} from "../../services/mock";


const MySales = (props) => {
	const [modalShow, setModalShow] = React.useState(false);

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
			lastSale: '03.08.2021'
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
			lastSale: '03.08.2021'
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
			lastSale: '03.08.2021'
		}
	]

	return (
		<div className="wrap">
			<div className="wrap__top">
				<MainTitle title={mySalesProps.title} description={mySalesProps.description}/>
				<Button className="button" variant="primary" onClick={() => setModalShow(true)}>
					<ButtonCreate />
				</Button>
				<MyModal
					info={modalCreate}
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</div>
			<hr/>
			<div className="wrap__content">
				<Table striped borderless>
					<thead>
					<tr>
						{tableMySalesTitles.map((title) => (
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
							<td>{product.lastSale}</td>
						</tr>
					))}

					</tbody>
				</Table>
			</div>
		</div>
	)
}

export default MySales;