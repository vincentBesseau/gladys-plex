const sendCommand = require('../..plex.sendCommand');


module.exports = function moveLeft(params){
    sails.log('plex.moveLeft');
    return sendCommand('navigation.moveLeft', params);
};