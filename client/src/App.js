import React, {useCallback, useEffect, useState} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import {routes} from "./routes/routes";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
import Login from "./components/Login";

import './App.scss';
import "./assets/fonts/fonts.css";
import MainPage from "./components/MainPage";
import MySales from "./components/MySales";
import MyProducts from "./components/MyProducts";
import Personal from "./components/Personal";
import {getAll, getAllSales, getOneUser} from "./services/ajaxUser";

const App = () => {
	const [isToken, setIsToken] = useState(JSON.parse(localStorage.getItem('token')) || '');
	const [getUser, setGetUser] = useState({})
	const [getProd, setGetProd] = useState([])
	const [getSaleProd, setGetSaleProd] = useState([])

	const removeToken = () => {
		setIsToken('')
		localStorage.setItem('token', JSON.stringify(''));
	}

	const createToken = (response) => {
		setIsToken(response.token)
		localStorage.setItem('token', JSON.stringify(response.token));
	}

	const getMySales = useCallback(
		() => {
			getAllSales()
				.then(data => {
					setGetSaleProd(data)
				})
		}, [])

	useEffect(() => {

		getMySales()
	}, [isToken])


	return (
		<BrowserRouter>
			<Route
				render={() => <Register removeToken={removeToken}/>}
				path="/register"
				exact="true"
			/>
			<Route
				render={() => <Login removeToken={removeToken} createToken={createToken} isToken={isToken}/>}
				path="/login"
				exact="true"
			/>
			{routes.map((route) => {
					const Main = route.component;
					return <Route
						render={() => isToken
							? <Main removeToken={removeToken}/>
							: <Redirect to="/register"/>}
						path={route.path}
						exact={route.exact}
					/>
				}
			)}
		</BrowserRouter>
	);
}

export default App;
