var http = require('http');

var server = http.createServer(function(req, res) { 
	res.writeHead(
		200,
		{ 'Content-Type': 'text/plain' });
	res.end('Hello World');
});

var port = Number(process.env.PORT || 8080);

server.listen(port);
