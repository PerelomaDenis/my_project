const mongoose = require('mongoose')
const Schema = mongoose.Schema

const salesSchema = new Schema({
	productName: {
		type: String,
		required: true
	},
	store: {
		type: String,
		required: true
	},
	saleDate: {
		type: String,
		required: true
	},
	productCategory: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	weight: {
		type: Number,
		required: true
	},
	sellQuantity: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	user: {
		ref: 'users',
		type: Schema.Types.ObjectId
	},
	createDate: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model('sales', salesSchema)