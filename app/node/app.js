var port = parseInt(process.env.PORT, 10) || 8080,
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	alphabet = require('./routes/alphabet');

app.use(bodyParser.urlencoded());

app.get('/alphabet', alphabet.getAll);
app.get('/alphabet/:type', alphabet.getByType);
app.post('/alphabet', alphabet.addChar);
app.put('/alphabet/:id', alphabet.updateChar);
app.delete('/alphabet/:id', alphabet.deleteChar);

app.listen(port);
console.log('Now serving the app at http://localhost:' + port + '/');