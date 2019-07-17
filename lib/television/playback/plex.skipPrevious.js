 const sendCommand = require('../../plex.sendCommand.js');


module.exports = function skipPrevious(params){
    sails.log('plex.skipPrevious');
    return sendCommand('playback.skipPrevious', params);
};