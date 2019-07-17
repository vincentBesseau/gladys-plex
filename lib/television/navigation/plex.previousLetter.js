const sendCommand = require('../..plex.sendCommand');


module.exports = function previousLetter(params){
    sails.log('plex.previousLetter');
    return sendCommand('navigation.previousLetter', params);
};