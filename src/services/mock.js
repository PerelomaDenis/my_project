import plus from '../assets/images/plus.svg';
import home from "../assets/images/home.svg";
import doc from "../assets/images/doc.svg";
import sales from "../assets/images/perc.svg";
import user from "../assets/images/user.svg";

export const modalCreate = {
	title: 'Create a product',
	buttonIcon: {plus},
	buttonText: 'Add product',
	inputs: [
		{
			value: '',
			type: 'text',
			placeholder: 'Store',
			name: 'storeName',
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Price',
			name: 'price',
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Product name',
			name: 'productName',
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Product Category',
			name: 'productCategory',
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Quantity of goods',
			name: 'quantity',
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Weight / Volume of one item',
			name: 'weight',
		},
	]
}

export const modalSell = {
	title: 'Sell the product',
	buttonIcon: '',
	buttonText: 'Sell product',
	inputs: [
		{
			type: 'text',
			placeholder: 'Numbers of product'
		},
		{
			type: 'text',
			placeholder: 'Date of sale'
		},
	]
}

export const modalEdit = {
	title: 'Editing a product',
	buttonIcon: '',
	buttonText: 'Save changes',
	inputs: [
		{
			value: '',
			type: 'text',
			placeholder: 'Store',
			name: 'storeName',
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Price',
			name: 'price',
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Product name',
			name: 'productName',
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Product Category',
			name: 'productCategory',
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Quantity of goods',
			name: 'quantity',
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Weight / Volume of one item',
			name: 'weight',
		},
	]
}

export const mainPageProps = {
	title: "Sales statistics",
	description: "Welcome to CRM dashboard"
}

export const myProductsProps = {
	title: "My product",
	description: "Product table"
}

export const mySalesProps = {
	title: "My sales",
	description: "Sales table"
}

export const personalProps = {
	title: "Personal Cabinet",
	description: "Information about your account"
}

export const tableMyProductTitles = [
	'Product name',
	'Store',
	'Address',
	'Category',
	'Creation date',
	'Price',
	'Remains',
	'Weight / Volume',
	'Actions'
]

export const tableMySalesTitles = [
	'Product name',
	'Store',
	'Address',
	'Category',
	'Creation date',
	'Price',
	'Remains',
	'Weight / Volume',
	'Last sale'
]

export const links = [
	{
		name: 'Main page',
		icon: home,
		url: '/'
	},
	{
		name: 'My Products',
		icon: doc,
		url: '/my-products'
	},
	{
		name: 'My sales',
		icon: sales,
		url: '/my-sales'
	},
	{
		name: 'Personal Cabinet',
		icon: user,
		url: '/personal'
	},
];