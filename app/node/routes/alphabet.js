var db = require('mongojs').connect('bUlam', ['Alphabet']),
	commonLib = require('../common/lib');

exports.getAll = function(req, res) {
	var type = req.params.type;

	db.Alphabet.find(function(err, ptd) {
		if( err || !ptd) {
			console.log('No data found');
			res.end();
		}
		else {
			commonLib.setO(ptd, res);
		}
	});
};

exports.getByType = function(req, res) {
	var type = req.params.type;

	db.Alphabet.find({type:type},function(err, ptd) {
		if( err || !ptd) {
			console.log('No data found');
			res.end();
		}
		else {
			commonLib.setO(ptd, res);
		}
	});
};

exports.addChar = function(req, res) {

};

exports.updateChar = function(res, req) {

};

exports.deleteChar = function(res, req) {

};