const sendCommand = require('../..plex.sendCommand');


module.exports = function moveUp(params){
    sails.log('plex.moveUp');
    return sendCommand('navigation.moveUp', params);
};