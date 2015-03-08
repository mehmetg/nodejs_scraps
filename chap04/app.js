var flight = require('./flight');

var pdxlax = {
	number: 845,
	origin: 'PDX',
	destination: 'LAX'
};

var pl = flight.create(pdxlax);

pl.triggerDepart();



var ausdca = {
	number: 234,
	origin: 'AUS',
	destination: 'DCA'
}

var ad = flight.create(ausdca);

console.log(pl.getInformation());
console.log(ad.getInformation());
console.log("total flights: " + flight.getNumTotalFlights());
console.log('all destinations: ' + flight.getAllDestinations());
flight.clearAllTracking();
console.log("total flights: " + flight.getNumTotalFlights());
console.log('all destinations: ' + flight.getAllDestinations());
/*
flight.setOrigin('LAX');
flight.setDestination('DCA');
flight.setNumber(462);
console.log(flight.getInfo());


var anotherFlight = require('./flight');


console.log(anotherFlight.getInfo());
*/