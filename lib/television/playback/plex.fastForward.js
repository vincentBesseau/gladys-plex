const sendCommand = require('../plex.sendCommand.js');


module.exports = function stepForward(params){
    sails.log('plex.stepForward');
    return sendCommand('playback.stepForward', params);
};