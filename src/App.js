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

	localStorage.setItem('products', JSON.stringify(products))

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
