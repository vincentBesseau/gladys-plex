const sendCommand = require('../..plex.sendCommand');


module.exports = function moveRight(params){
    sails.log('plex.moveRight');
    return sendCommand('navigation.moveRight', params);
};