const sendCommand = require('../plex.sendCommand.js');


module.exports = function play(params){
    sails.log('plex.play');
    return sendCommand('playback.play', params);
};