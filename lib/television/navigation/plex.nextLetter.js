const sendCommand = require('../..plex.sendCommand');


module.exports = function nextLetter(params){
    sails.log('plex.nextLetter');
    return sendCommand('navigation.nextLetter', params);
};