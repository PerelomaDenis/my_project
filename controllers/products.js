const Products = require('../models/Products')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async (req, res) => {
	try {
		const products = await Products.find({
			user: req.user.id
		})
		res.status(200).json(products)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.getById = async (req, res) => {
	try {
		const product = await Products.findById(req.params.id)
		res.status(200).json(product)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.create = async (req, res) => {
	const product = new Products({
		store: req.body.store,
		productCategory: req.body.productCategory,
		productName: req.body.productName,
		quantity: req.body.quantity,
		weight: req.body.weight,
		price: req.body.price,
		user: req.user.id
	})
	try {
		await product.save()
		res.status(201).json(product)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.update = async (req, res) => {
	try {
		const product = await Products.findOneAndUpdate(
			{_id: req.params.id},
			{$set: req.body},
			{new: true}
		)
		res.status(200).json(product)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.remove = async (req, res) => {
	try {
		await Products.remove({_id: req.params.id})
		res.status(200).json({
			message: 'Product removed'
		})
	} catch (e) {
		errorHandler(res, e)
	}
}