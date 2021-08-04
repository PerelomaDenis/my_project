import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import ButtonCreate from "../ButtonCreate";
import MyModal from "../MyModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyProducts.scss';
import MainTitle from "../MainTitle";


const MyProducts = (props) => {
	const [modalShow, setModalShow] = React.useState(false);

	const myProductsProps = {
		title: "My product",
		description: "Product table"
	}

	return (
		<div className="wrap">
			<div className="wrap__top">
				<MainTitle title={myProductsProps.title} description={myProductsProps.description}/>
				<Button className="button" variant="primary" onClick={() => setModalShow(true)}>
					<ButtonCreate />
				</Button>
				<MyModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</div>
			<hr/>
			<div className="wrap__content">

			</div>
		</div>
	)
}

export default MyProducts;