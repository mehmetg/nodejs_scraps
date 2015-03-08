var http = require('http');

var handleRequest = function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Welcome to Node Essential Training\n');
	console.log("Request received!");
};
var server = http.createServer(handleRequest);

server.listen(3000, 'localhost');
console.log("Server started!");