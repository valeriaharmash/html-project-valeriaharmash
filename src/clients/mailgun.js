require('dotenv').config()
const MG = require('mailgun.js')
const formData = require('form-data')

class Mailgun extends MG  {
  constructor() {
    super(formData);
    this.mg = this.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY
    });
  }

  async sendEmail(email, name, message) {
    await this.mg.messages
      .create(process.env.MAILGUN_DOMAIN, {
        from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
        to: [process.env.RECEIVER_EMAIL],
        subject: `A New Message from ${name} (${email})`,
        html: `<p>${message}</p>`
      })
  }
}

module.exports = {
  client: new Mailgun()
}