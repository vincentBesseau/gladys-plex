const sendCommand = require('../..plex.sendCommand');


module.exports = function paused(params){
    sails.log('plex.paused');
    return sendCommand('currently.paused', params);
};