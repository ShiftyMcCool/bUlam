exports.setO = function(ptd, res) {
/*	
	var output = [];

	ptd.forEach( function(theData) {
		output.push(theData);
	});
	console.log(JSON.stringify(output));
	res.writeHead(200);
	res.write(JSON.stringify(output));
*/

	res.send(ptd);
	res.end();
};