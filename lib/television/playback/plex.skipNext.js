const sendCommand = require('../../plex.sendCommand.js');


module.exports = function skipNext(params){
    sails.log('plex.skipNext');
    return sendCommand('playback.skipNext', params);
};