const User = require('../models/User')
const errorHandler = require("../utils/errorHandler");
const bcrypt = require("bcryptjs");

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
		// console.log('========>req', req);
		if(req.body.oldPassword && req.body.newPassword) {
			
			const passwordResult = bcrypt.compareSync(req.body.oldPassword, req.body.password)
			if(passwordResult) {
				const salt = bcrypt.genSaltSync(10)
				req.body.password = bcrypt.hashSync(req.body.newPassword, salt)
				const candidate = await User.findOneAndUpdate(
					{_id: req.params.id},
					{$set: req.body},
					{new: true}
				)
				res.status(200).json(candidate)
			} else {
				res.status(401).json({
					message: 'Passwords are not similar'
				})
			}
		} else {
			const candidate = await User.findOneAndUpdate(
				{_id: req.params.id},
				{$set: req.body},
				{new: true}
			)
			res.status(200).json(candidate)
		}

	} catch (e) {
		errorHandler(res, e)
	}
}