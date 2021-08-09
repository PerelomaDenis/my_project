import React, {useState} from "react";
import {Button, Modal, Table} from "react-bootstrap";

import ButtonCreate from "../ButtonCreate";
import MyCreateModal from "../MyCreateModal";
import MainTitle from "../MainTitle";

import 'bootstrap/dist/css/bootstrap.min.css';
import './MySales.scss';
import {modalCreate, mySalesProps, tableMySalesTitles} from "../../services/mock";
import {getCurrentDate} from "../MyProducts/MyProducts";


const MySales = () => {
	const [modalCreateShow, setModalCreateShow] = useState(false);

	const getSellProd = JSON.parse(localStorage.getItem('sellProducts'))
	
	return (
		<div className="wrap">
			<div className="wrap__top">
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
				<Table striped borderless>
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
							<td>{product.address}</td>
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
					/>
				)}
			</div>
		</div>
	)
}

export default MySales;