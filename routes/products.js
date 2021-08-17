const express = require('express')
const controller = require('../controllers/products')
const passport = require('passport')
const router = express.Router()


router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById)
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update)
router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)

module.exports = router