const sendCommand = require('../plex.sendCommand.js');


module.exports = function stop(params){
    sails.log('plex.stop');
    return sendCommand('playback.stop', params);
};