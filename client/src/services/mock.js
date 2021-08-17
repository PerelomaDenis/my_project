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
			errorValid: 'storeNameValid',
			errorText: 'Min 3'
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Price',
			name: 'price',
			errorValid: 'priceValid',
			errorText: 'Only number'
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Product name',
			name: 'productName',
			errorValid: 'productNameValid',
			errorText: 'Min 2'
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Product Category',
			name: 'productCategory',
			errorValid: 'productCategoryValid',
			errorText: 'Min 2'
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Quantity of goods',
			name: 'quantity',
			errorValid: 'quantityValid',
			errorText: 'Only number'
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Weight / Volume of one item',
			name: 'weight',
			errorValid: 'weightValid',
			errorText: 'Only number'
		},
	]
}

export const modalSell = {
	title: 'Sell the product',
	buttonIcon: '',
	buttonText: 'Sell product',
	inputs: [
		{
			value: '',
			type: 'text',
			placeholder: 'Numbers of product',
			name: 'sellQuantity',
			errorValid: 'sellQuantityValid',
			errorText: 'Only number'
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Date of sale',
			name: 'saleDate',
			errorValid: 'saleDateValid',
			errorText: 'Enter Mon, Tue, Wed, Thu, Fri, Sat or Sun'
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
			errorValid: 'storeNameValid',
			errorText: 'Min 3'
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Price',
			name: 'price',
			errorValid: 'priceValid',
			errorText: 'Only number'
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Product name',
			name: 'productName',
			errorValid: 'productNameValid',
			errorText: 'Min 2'
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Product Category',
			name: 'productCategory',
			errorValid: 'productCategoryValid',
			errorText: 'Min 2'
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Quantity of goods',
			name: 'quantity',
			errorValid: 'quantityValid',
			errorText: 'Only number'
		},
		{
			value: '',
			type: 'text',
			placeholder: 'Weight / Volume of one item',
			name: 'weight',
			errorValid: 'weightValid',
			errorText: 'Only number'
		},
	]
}

export const registerFormFields = [
	{
		label: 'First name',
		id: 'firstName',
		placeholder: 'First name',
		type: 'text',
		valid: 'firstNameValid',
		errorText: 'Min 4'
	},
	{
		label: 'Last name',
		id: 'lastName',
		placeholder: 'Last name',
		type: 'text',
		valid: 'lastNameValid',
		errorText: 'Min 6'
	},
	{
		label: 'Company name',
		id: 'companyName',
		placeholder: 'Company name',
		type: 'text',
		valid: 'companyValid',
		errorText: 'Min 6'
	},
	{
		label: 'Email',
		id: 'email',
		placeholder: 'Email',
		type: 'email',
		valid: 'emailValid',
		errorText: 'Wrong email'
	},
	{
		label: 'Password',
		id: 'password',
		placeholder: 'Password',
		type: 'password',
		valid: 'passwordValid',
		errorText: 'Min 6'
	},
	{
		label: 'Repeat password',
		id: 'repeatPassword',
		placeholder: 'Repeat password',
		type: 'password',
		valid: 'confirmPasswordValid',
		errorText: 'Passwords are not similar'
	},
]

export const loginFormFields = [
	{
		label: 'Email',
		id: 'email',
		placeholder: 'Email',
		type: 'email',
		valid: 'emailValid',
		errorText: 'Wrong email'
	},
	{
		label: 'Password',
		id: 'password',
		placeholder: 'Password',
		type: 'password',
		valid: 'passwordValid',
		errorText: 'Min 6'
	}
]

export const personalFormFields = [
	{
		label: 'First name',
		id: 'firstName',
		placeholder: 'Enter your first name',
		type: 'text',
		valid: 'firstNameValid',
		errorText: 'Min 4'
	},
	{
		label: 'Last name',
		id: 'lastName',
		placeholder: 'Enter your last name',
		type: 'text',
		valid: 'lastNameValid',
		errorText: 'Min 6'
	},
	{
		label: 'Company name',
		id: 'company',
		placeholder: 'Enter your company name',
		type: 'text',
		valid: 'companyValid',
		errorText: 'Min 6'
	},
	{
		label: 'Product Category',
		id: 'productCategory',
		placeholder: 'Enter product category',
		type: 'text',
		valid: 'productCategoryValid',
		errorText: 'Min 2'
	},
	{
		label: 'Address',
		id: 'address',
		placeholder: 'Enter your address',
		type: 'text',
		valid: 'addressValid',
		errorText: 'Min 6'
	},

]

export const personalFormPasswordFields = [
	{
		label: 'Enter old password',
		id: 'oldPassword',
		placeholder: 'Enter password',
		type: 'password',
		valid: 'oldPasswordValid',
		errorText: 'Min 6'
	},
	{
		label: 'Enter a new password',
		id: 'newPassword',
		placeholder: 'Enter your new password',
		type: 'password',
		valid: 'newPasswordValid',
		errorText: 'Min 6'
	}
]

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
	'Sold items',
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