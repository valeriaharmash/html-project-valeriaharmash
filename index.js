require('dotenv').config()
const app = require('./app')
const chalk = require('chalk')
const port = process.env.PORT || 3000

app.listen(port, () => console.log(chalk.yellow(`Listening on port ${port}`)))
