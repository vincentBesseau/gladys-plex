const sendCommand = require('../plex.sendCommand.js');


module.exports = function fastForward(params){
    sails.log('plex.fastForward');
    return sendCommand('playback.fastForward', params);
};