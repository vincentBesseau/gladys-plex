const sendCommand = require('../plex.sendCommand.js');


module.exports = function bigStepForward(params){
    sails.log('plex.bigStepForward');
    return sendCommand('playback.bigStepForward', params);
};