const sendCommand = require('../../plex.sendCommand.js');


module.exports = function pause(params){
    sails.log('plex.pause');
    return sendCommand('playback.pause', params);
};