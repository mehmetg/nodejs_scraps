var numFlights = 0;
var allDestinations = [];
var Flight = function() {

	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};

	this.fill = function (info) {
		numFlights++;
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
				if(prop === 'destination')
				{
					allDestinations.push(info[prop]);
				}
			}	
		}
	};
	
	this.triggerDepart = function () {
		this.data.actualDepart = Date.now();
	};
	this.triggerArrive = function () {
		this.data.actualArrive = Date.now();
	};
	this.getInformation = function () {
		return this.data;
	};
};

exports.create = function (info) {
	var instance = new Flight();
	instance.fill(info);
	return instance;
};
exports.getNumTotalFlights = function () {
		return numFlights;
};
exports.getAllDestinations = function () {
		return allDestinations;
};
exports.clearAllTracking = function () {
	numFlights = 0;
	allDestinations = [];
};