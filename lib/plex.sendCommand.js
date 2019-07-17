var shared = require('./plex.shared.js');

module.exports = function sendCommand(functionName, params) {
    return new Promise(function(resolve, reject){
        if(!shared.instances[params.device]) return reject(`No plex with deviceId ${params.device}`);

        // call the plex function
        shared.instances[params.device][functionName]();
    });
};