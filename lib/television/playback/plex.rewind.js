const sendCommand = require('../plex.sendCommand.js');


module.exports = function rewind(params){
    sails.log('plex.rewind');
    return sendCommand('playback.rewind', params);
};