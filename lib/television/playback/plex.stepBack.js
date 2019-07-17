const sendCommand = require('../plex.sendCommand.js');


module.exports = function stepBack(params){
    sails.log('plex.stepBack');
    return sendCommand('playback.stepBack', params);
};