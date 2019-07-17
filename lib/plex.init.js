const PlexControl = require("plex-control").PlexControl;
var shared = require('./plex.shared.js');

module.exports = function init() {
    return gladys.param.getValue('PLEX_CLIENT_IP_LIST')
    .then((PLEX_CLIENT_IP_LIST) => {
        return plexClientListIp=PLEX_CLIENT_IP_LIST.split('|');
    })
    .catch(() => {
        return []
    })
    .then((plexClientListIp) => {

        // reset all instances 
        shared.instances = {};

        plexClientListIp.forEach(plexClientIp => {
            gladys.device.getByIdentifier({identifier:plexClientIp,service:'plex'})
            .then((device) => {
                plexIpClientIp = plexClientIp.split('::')
                plexIp = plexIpClientIp[0];
                clientIp = plexIpClientIp[1];
                shared.instances[device.id]= new PlexControl(plexIp,clientIp);
            })
            .catch((er) => {
                sails.log.info('No plex TV install yet {'+plexClientIp+'}')
            })
        });
    })
};
