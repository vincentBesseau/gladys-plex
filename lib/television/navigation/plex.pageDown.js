const sendCommand = require('../..plex.sendCommand');


module.exports = function pageDown(params){
    sails.log('plex.pageDown');
    return sendCommand('navigation.pageDown', params);
};