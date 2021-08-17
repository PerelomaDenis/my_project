const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	companyName: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		default: 'Taganrog'
	},
	productCategory: {
		type: String,
		default: 'IT'
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('users', userSchema)