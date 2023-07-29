const config = require('config');
const path = require('path');
const express = require('express')

const app = express();

app.set('port', config.get('port') || 8080);
app.set("mode", config.get("mode") || "development");

app.use(express.static(path.join(process.cwd(), "src", "assets")));

app.use(require('./router'));

app.listen(app.get('port'), () => {
  console.log('Running server on http://localhost:%d in %s mode', app.get('port'), app.get('mode'));
});
