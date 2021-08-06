import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {routes} from "./routes/routes";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";

import './App.scss';
import "./assets/fonts/fonts.css";

const App = () => {
	const isLogin = false;
	const products = JSON.parse(localStorage.products || []);
	const sellProducts = JSON.parse(localStorage.sellProducts || []);
	// const sellProducts = [
	// 	{
	// 		productName: 'Sneakers',
	// 		store: 'Adidas',
	// 		address: 'Taganrog',
	// 		category: 'Sportswear',
	// 		createDate: '04.08.2021',
	// 		price: '$1 000',
	// 		remains: '40',
	// 		weight: '5kg',
	// 		lastSale: '03.08.2021'
	// 	},
	// 	{
	// 		productName: 'Mars',
	// 		store: 'Nike',
	// 		address: 'Moscow',
	// 		category: 'Food',
	// 		createDate: '03.08.2021',
	// 		price: '$ 100',
	// 		remains: '30',
	// 		weight: '4kg',
	// 		lastSale: '03.08.2021'
	// 	},
	// 	{
	// 		productName: 'Twix',
	// 		store: 'Reebok',
	// 		address: 'Rostov',
	// 		category: 'Sportswear',
	// 		createDate: '02.08.2021',
	// 		price: '$ 10',
	// 		remains: '20',
	// 		weight: '3kg',
	// 		lastSale: '03.08.2021'
	// 	}
	// ]
	localStorage.setItem('products', JSON.stringify(products))
	localStorage.setItem('sellProducts', JSON.stringify(sellProducts))

	return (
		<BrowserRouter>
			{isLogin ? (
				<Register/>
			) : (
				<div className="page">
					<div className="sidebar">
						<Sidebar/>
					</div>
					<div className="main">
						<Switch>
							{routes.map((route) => (
								<Route
									component={route.component}
									path={route.path}
									exact={route.exact}
								/>
							))}
						</Switch>
					</div>
				</div>
			)}
		</BrowserRouter>
	);
}

export default App;
