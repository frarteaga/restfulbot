var http = require('http');
var express = require('express')

var port = Number(process.env.PORT || 8080);

var app = express()

app.get('/', function(req, res) {
	res.send('Hello world' + new Date());
});

app.listen(port, function() { 
	console.log('Application is running and listening on port ' + port);
});
