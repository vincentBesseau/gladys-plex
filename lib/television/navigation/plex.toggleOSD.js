const sendCommand = require('../..plex.sendCommand');


module.exports = function toggleOSD(params){
    sails.log('plex.toggleOSD');
    return sendCommand('navigation.toggleOSD', params);
};