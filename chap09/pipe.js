var fs = require('fs');

var stream = fs.createReadStream('data.json'),
	writeable = fs.createWriteStream('copy.json');

stream.pipe(process.stdout);

stream.pipe(writeable);
