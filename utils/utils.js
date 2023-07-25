require('dotenv').config()
const e = require('express')
const formData = require('form-data')
const Mailgun = require('mailgun.js')

const mailgun = new Mailgun(formData)
const mg = mailgun.client({
	username: 'api',
	key: process.env.MAILGUN_API_KEY
})

const sendEmail = (email, name, message) => {
	mg.messages
		.create(process.env.MAILGUN_DOMAIN, {
			from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
			to: [process.env.RECEIVER_EMAIL],
			subject: `A New Message from ${name} (${email})`,
			html: `<p>${message}</p>`
		})
		.catch((err) => {
			throw err
		})
}

module.exports = {
	sendEmail
}
