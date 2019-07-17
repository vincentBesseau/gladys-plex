const sendCommand = require('../..plex.sendCommand');


module.exports = function playing(params){
    sails.log('plex.playing');
    return sendCommand('currently.playing', params);
};