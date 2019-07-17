const sendCommand = require('../..plex.sendCommand');


module.exports = function back(params){
    sails.log('plex.back');
    return sendCommand('navigation.back', params);
};