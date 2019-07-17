const sendCommand = require('../..plex.sendCommand');


module.exports = function select(params){
    sails.log('plex.select');
    return sendCommand('navigation.select', params);
};