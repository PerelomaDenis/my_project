import MainPage from "../components/MainPage";
import MyProducts from "../components/MyProducts";
import MySales from "../components/MySales";
import Personal from "../components/Personal";
import Register from "../components/Register";
import Login from "../components/Login";

export const routes = [
	{
		path: '/',
		exact: true,
		component: MainPage,
	},
	{
		path: '/my-products',
		exact: true,
		component: MyProducts,
	},
	{
		path: '/my-sales',
		exact: true,
		component: MySales,
	},
	{
		path: '/personal',
		exact: true,
		component: Personal,
	},
	// {
	// 	path: '/register',
	// 	exact: true,
	// 	component: Register,
	// },
	// {
	// 	path: '/login',
	// 	exact: true,
	// 	component: Login,
	// },
]