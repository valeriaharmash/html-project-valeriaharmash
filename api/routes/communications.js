const router = require('express').Router()
const { sendEmail } = require('../../utils')
require('dotenv').config()

// communications: send email
router.post('/', async (req, res, next) => {
	try {
		const { name, email, message } = req.body

		sendEmail(email, name, message)

		res.sendStatus(204)
	} catch (e) {
		console.error(e)
		next(e)
	}
})

// error handling
router.use((err, req, res, next) => {
	console.log(err)
	res.status(err.status || 500).send({ error: err.message })
})

module.exports = router
