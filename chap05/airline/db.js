var mongoose = require('mongoose');

mongoose.connect('mongodb://flights:password@ds055689.mongolab.com:55689/flights');

module.exports = mongoose.connection;