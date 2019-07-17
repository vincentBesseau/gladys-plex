const sendCommand = require('../../plex.sendCommand.js');


module.exports = function bigStepBack(params){
    sails.log('plex.bigStepBack');
    return sendCommand('playback.bigStepBack', params);
};