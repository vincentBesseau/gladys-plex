const sendCommand = require('../..plex.sendCommand');


module.exports = function pageUp(params){
    sails.log('plex.pageUp');
    return sendCommand('navigation.pageUp', params);
};