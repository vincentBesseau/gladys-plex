const sendCommand = require('../..plex.sendCommand');


module.exports = function contextMenu(params){
    sails.log('plex.contextMenu');
    return sendCommand('navigation.contextMenu', params);
};