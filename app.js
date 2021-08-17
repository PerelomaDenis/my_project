const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const authRoutes = require('./routes/auth')
const productsRoutes = require('./routes/products')
const userRoutes = require('./routes/user')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI)
	.then(() => console.log('MongoDB connected'))
	.catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/user', userRoutes)

module.exports = app