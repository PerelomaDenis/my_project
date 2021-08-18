const Sales = require('../models/Sales')
const errorHandler = require('../utils/errorHandler')
const Products = require("../models/Products");

module.exports.getAll = async (req, res) => {
	try {
		const products = await Sales.find({
			user: req.user.id
		})
		res.status(200).json(products)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.add = async (req, res) => {
	const product = new Sales({
		store: req.body.store,
		productCategory: req.body.productCategory,
		productName: req.body.productName,
		quantity: req.body.quantity,
		weight: req.body.weight,
		price: req.body.price,
		sellQuantity: req.body.sellQuantity,
		saleDate: req.body.saleDate,
		user: req.user.id
	})
	try {
		await product.save()
		res.status(201).json(product)
	} catch (e) {
		errorHandler(res, e)
	}
}