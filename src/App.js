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
	const users = JSON.parse(localStorage.users || []);

	// const users = [
	// 	{
	// 		id: '0',
	// 		firstName: 'Denis',
	// 		lastName: 'Pereloma',
	// 		companyName: 'Justice',
	// 		productCategory: 'IT',
	// 		address: 'Taganrog',
	// 		email: 'qqq@mail.ru',
	// 		password: 'qwerty'
	// 	},
	// 	{
	// 		id: '1',
	// 		firstName: 'D',
	// 		lastName: 'P',
	// 		companyName: 'J',
	// 		productCategory: 'IT',
	// 		address: 'T',
	// 		email: 'q@mail.ru',
	// 		password: 'qwerty'
	// 	}
	// ]

	localStorage.setItem('products', JSON.stringify(products))
	localStorage.setItem('sellProducts', JSON.stringify(sellProducts))
	localStorage.setItem('users', JSON.stringify(users))

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
