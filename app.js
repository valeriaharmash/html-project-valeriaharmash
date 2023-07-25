const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
require('dotenv').config()

const app = express()
const compiler = webpack(webpackConfig)

// logging middleware
app.use(volleyball)

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Use Webpack middleware for development
app.use(
	webpackDevMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath
	})
)

// Serve static files from the 'public' directory
app.use(express.static('public'))

// CORS policy to accept front-end requests
app.use(cors())

// Route to serve your main HTML file
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// API routes
app.use('/api', require('./api'))

// error handling
app.use(function (err, req, res, next) {
	console.error(err)
	console.error(err.stack)
	res.status(err.status || 500).send(err.message || 'Internal server error.')
})

module.exports = app
