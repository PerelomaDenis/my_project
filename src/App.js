import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {routes} from "./routes/routes";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
import Login from "./components/Login";

import './App.scss';
import "./assets/fonts/fonts.css";

const App = () => {
	const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
	const [sellProducts, setSellProducts] = useState(JSON.parse(localStorage.getItem('sellProducts')) || [])
	const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
	const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')) || false)
	const [isReg, setIsReg] = useState(JSON.parse(localStorage.getItem('isReg')) || false)
	const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('userId')) || '')

	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(products))
		localStorage.setItem('sellProducts', JSON.stringify(sellProducts))
		localStorage.setItem('users', JSON.stringify(users))
		localStorage.setItem('isReg', JSON.stringify(isReg));
		localStorage.setItem('isLogin', JSON.stringify(isLogin));
		localStorage.setItem('userId', JSON.stringify(userId));
	}, [])

	const changeIsLoin = (value) => {
		setIsLogin(value)
	}

	const changeIsReg = (value) => {
		setIsReg(value)
	}

	const changeUserId = (value) => {
		setUserId(value)
	}

	return (
		<BrowserRouter>
			{!isReg
				? <Register changeIsReg={changeIsReg}/>
				: !isLogin
					? <Login changeIsLoin={changeIsLoin} changeUserId={changeUserId}/>
					: <div className="page">
						<div className="sidebar">
							<Sidebar changeIsReg={changeIsReg} changeIsLoin={changeIsLoin}/>
						</div>
						<div className="main">
							<Switch>
								{routes.map((route) => {
										const Main = route.component;
										return <Route
											render={() => <Main changeIsReg={changeIsReg} changeIsLoin={changeIsLoin}/>}
											// component={route.component}
											path={route.path}
											exact={route.exact}
										/>
									}
								)}
							</Switch>
						</div>
					</div>
			}
		</BrowserRouter>
	);
}

export default App;
