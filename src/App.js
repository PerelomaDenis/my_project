import './App.scss';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {routes} from "./routes/routes";
import Sidebar from "./components/Sidebar";
import "./assets/fonts/fonts.css";
import Register from "./components/Register";

const App = () => {
	const isLogin = false;
	const products = [
    {
      name: 123,
    },
  ]

	localStorage.setItem('products', JSON.stringify(products))
  const getProd = JSON.parse(localStorage.getItem('products'))
  console.log('========>getProd', getProd);

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
