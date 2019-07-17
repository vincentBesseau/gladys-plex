const apiTelevision = require('./lib/television/plex')
const init = require('./lib/plex.init');
const setup = require('./lib/plex.setup');
const uninstall = require('./lib/plex.uninstall');

gladys.on('ready', function() {
	init();
})

module.exports = function(sails) {

	return {
		television: apiTelevision,
		install: install,
		setup: setup,
		uninstall: uninstall
	};
};
