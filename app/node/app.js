var port = parseInt(process.env.PORT, 10) || 8080,
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	alphabet = require('./routes/alphabet'),
	math = require('./routes/math'),
	rules = require('./routes/rules');

app.use(bodyParser.urlencoded());

app.get('/alphabet', alphabet.getAll);
app.get('/alphabet/:type', alphabet.getByType);
app.post('/alphabet', alphabet.add);
app.put('/alphabet/:id', alphabet.update);
app.delete('/alphabet/:id', alphabet.delete);

app.get('/math', math.getAll);
app.get('/math/:type', math.getByType);
app.post('/math', math.add);
app.put('/math/:id', math.update);
app.delete('/math/:id', math.delete);

app.get('/rules', rules.getAll);
app.get('/rules/:type', rules.getByType);
app.post('/rules', rules.add);
app.put('/rules/:id', rules.update);
app.delete('/rules/:id', rules.delete);

app.listen(port);
console.log('Now serving the app at http://localhost:' + port + '/');