import React, {useEffect, useState} from "react";
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

const App = () => {
	const [isToken, setIsToken] = useState(localStorage.getItem('token') || null);
	const [isReg, setIsReg] = useState(false)


	const removeToken = () => {
		setIsToken('')
		localStorage.setItem('token', JSON.stringify(''));
	}

	const createToken = (response) => {
		setIsToken(response.token)
		localStorage.setItem('token', response.token);
	}

	const changeIsReg = (value) => {
		setIsReg(value)
	}
	console.log('========>isReg', isReg);
	console.log('========>isToken', isToken);
	return (
		<BrowserRouter>
			{/*// !isReg*/}
			{/*// ? <Register changeIsReg={changeIsReg}/>*/}
			{/*// : !isToken*/}
			{/*// 	? <Login createToken={createToken}/>*/}
			{/*// 	:*/}
			{/*	// <Switch>*/}
			{/*	// 	{routes.map((route) => {*/}
			{/*	// 			const Main = route.component;*/}
			{/*	// 			return <Route*/}
			{/*	// 				render={() => <Main changeIsReg={changeIsReg} removeToken={removeToken}/>}*/}
			{/*	// 				path={route.path}*/}
			{/*	// 				exact={route.exact}*/}
			{/*	// 			/>*/}
			{/*	// 		}*/}
			{/*	// 	)}*/}
			{/*	// </Switch>*/}
			<Route changeIsReg={changeIsReg} removeToken={removeToken}
				// render={() => <MainPage changeIsReg={changeIsReg} removeToken={removeToken}/>}
						 component={Register}
						 path="/"
						 exact="true"
			/>
			<Route changeIsReg={changeIsReg} removeToken={removeToken} createToken={createToken}
				// render={() => <MainPage changeIsReg={changeIsReg} removeToken={removeToken}/>}
						 component={Login}
						 path="/"
						 exact="true"
			/>
			<Route changeIsReg={changeIsReg} removeToken={removeToken}
				 render={() => isToken ? <MainPage changeIsReg={changeIsReg} removeToken={removeToken} /> : <Redirect to="/register"/>}
				// 		 component={MainPage}
						 path="/"
						 exact="true"
			/>
			<Route changeIsReg={changeIsReg} removeToken={removeToken}
				 render={() => <MainPage changeIsReg={changeIsReg} removeToken={removeToken}/>}
						 // component={MySales}
						 path="/"
						 exact="true"
			/>
			<Route changeIsReg={changeIsReg} removeToken={removeToken}
				 render={() => <MainPage changeIsReg={changeIsReg} removeToken={removeToken}/>}
						 // component={MyProducts}
						 path="/"
						 exact="true"
			/>
			<Route changeIsReg={changeIsReg} removeToken={removeToken}
				 render={() => <MainPage changeIsReg={changeIsReg} removeToken={removeToken}/>}
						 // component={Personal}
						 path="/"
						 exact="true"
			/>


		</BrowserRouter>
	);
}

export default App;
