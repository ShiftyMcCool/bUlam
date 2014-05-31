var db = require('mongojs').connect('bUlam', ['rules']),
	commonLib = require('../common/lib');

exports.getAll = function(req, res) {
	var type = req.params.type;

	db.rules.find(function(err, ptd) {
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

	db.rules.find({type:type},function(err, ptd) {
		if( err || !ptd) {
			console.log('No data found');
			res.end();
		}
		else {
			commonLib.setO(ptd, res);
		}
	});
};

exports.add = function(req, res) {

};

exports.update = function(res, req) {

};

exports.delete = function(res, req) {

};