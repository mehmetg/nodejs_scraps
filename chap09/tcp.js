var net = require('net'),
	fs = require('fs');

var server = net.createServer(function (connect) {
	var log = fs.createWriteStream('eli.log');

	console.log('Connection established!');

	connect.on('end' ,function () {
		console.log('Connection ended');
	});

	connect.write("Welcome hai!\r\n");
	connect.write('ELI!\r\n');
	connect.write("Loopback right?\r\n");

	connect.pipe(connect).pipe(log);
});

server.listen(7777, function () {
	console.log("Server ready on port 7777");
});