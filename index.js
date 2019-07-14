var http = require('http');

var port = Number(process.env.PORT || 8080);

var server = http.createServer(function(req, res) { 
	res.writeHead(
		200,
		{ 'Content-Type': 'text/plain' });
	res.end('Hello World');
});


server.listen(port);
