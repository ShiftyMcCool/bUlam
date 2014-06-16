var port = parseInt(process.env.PORT, 10) || 8080,
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	db = require('mongojs').connect('bUlam', ['numbers','rules','verbs','alphabet']),
	commonLib = require('./common/lib');

app.use(bodyParser.urlencoded());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/:collection', getAll);
app.get('/:collection/query', getByQuery);
app.get('/:collection/:key/:value', getByKey);
app.post('/:collection', add);
app.put('/:collection/:id', update);
app.delete('/:collection/:id', remove);

function getAll(req, res) {
	var	collection = req.params.collection,
		query = '';

	runFind(res, collection, query);
};

function getByQuery(req, res) {
	var collection = req.params.collection,
		query = req.body;

	runFind(res, collection, query);
};

function getByKey(req, res) {
	var key = req.params.key,
		value = req.params.value,
		collection = req.params.collection,
		query = JSON.parse('{"' + key + '":"' + value + '"}');

	runFind(res, collection, query);
};

function add(req, res) {

};

function update(res, req) {

};

function remove(res, req) {

};

function runFind(res, collection, query) {
	db[collection].find(query,function(err, ptd) {

		if( err || !ptd) {
			console.log('Error running query');
			res.end();
		}
		else {
			commonLib.setO(ptd, res);
		}
	});
}

app.listen(port);
console.log('Now serving the app at http://localhost:' + port + '/');