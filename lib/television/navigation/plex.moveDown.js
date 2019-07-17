const sendCommand = require('../..plex.sendCommand');


module.exports = function moveDown(params){
    sails.log('plex.moveDown');
    return sendCommand('navigation.moveDown', params);
};