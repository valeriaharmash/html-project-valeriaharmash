'use strict'

const router = require('express').Router()
const communicationsRouter = require('./routes/communications')

router.use('/communications', communicationsRouter)

router.use((req, res, next) => {
	const err = new Error('API route not found!')
	err.status = 404
	next(err)
})

module.exports = router
