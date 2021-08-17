const User = require('../models/User')
const errorHandler = require("../utils/errorHandler");

module.exports.getById = async (req, res) => {
	try {
		const candidate = await User.findOne({
			_id: req.user.id
		})
		res.status(200).json(candidate)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.update = async (req, res) => {
	try {
		const candidate = await User.findOneAndUpdate(
			{_id: req.params.id},
			{$set: req.body},
			{new: true}
		)
		res.status(200).json(candidate)
	} catch (e) {
		errorHandler(res, e)
	}
}