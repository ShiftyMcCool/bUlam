var port = parseInt(process.env.PORT, 10) || 8080,
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	alphabet = require('./routes/alphabet'),
	numbers = require('./routes/numbers'),
	rules = require('./routes/rules'),
	verbs = require('./routes/verbs');

app.use(bodyParser.urlencoded());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/alphabet', alphabet.getAll);
app.get('/alphabet/:type', alphabet.getByType);
app.post('/alphabet', alphabet.add);
app.put('/alphabet/:id', alphabet.update);
app.delete('/alphabet/:id', alphabet.delete);

app.get('/numbers', numbers.getAll);
app.get('/numbers/:type', numbers.getByType);
app.post('/numbers', numbers.add);
app.put('/numbers/:id', numbers.update);
app.delete('/numbers/:id', numbers.delete);

app.get('/rules', rules.getAll);
app.get('/rules/:type', rules.getByType);
app.post('/rules', rules.add);
app.put('/rules/:id', rules.update);
app.delete('/rules/:id', rules.delete);

app.get('/verbs', verbs.getAll);
app.get('/verbs/:type', verbs.getByType);
app.post('/verbs', verbs.add);
app.put('/verbs/:id', verbs.update);
app.delete('/verbs/:id', verbs.delete);

app.listen(port);
console.log('Now serving the app at http://localhost:' + port + '/');