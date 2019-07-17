var television = require('./television/plex.js')
module.exports = function() {
    return gladys.param.getValue('PLEX_CLIENT_IP_LIST')
    .then((PLEX_CLIENT_IP_LIST) => {
        return plexClientListIp=PLEX_CLIENT_IP_LIST.split('|');
    })
    .catch(() => {
        return []
    })
    .then((plexClientListIp) => {
        if (typeof plexClientListIp !== 'undefined' && plexClientListIp.length > 0) {
            plexClientListIp.forEach(function(plexClientIp) {
                return gladys.device.create({
                    device: {
                        name: 'Plex'+plexClientIp.split('::')[1],
                        protocol: 'wifi',
                        service: 'plex',
                        identifier: plexClientIp
                    },
                    types: [

                    ]
                })
            });
        }
    })
};
