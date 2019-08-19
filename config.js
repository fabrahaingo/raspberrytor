let config = {}

config.raspberries = {
    'node1': {
        localIp: '192.168.4.143',
        connectionType: 'vnc'
    },
    'node2': {
        localIp: '192.168.4.185',
        connectionType: 'vnc'
    },
    'node3': {
        localIp: '192.168.4.164',
        connectionType: 'vnc'
    },
    'node4': {
	    localIp: '192.168.4.185',
	    connectionType: 'vnc'
    },
    'node5': {
        localIp: '192.168.5.91',
        connectionType: 'vnc'
    }
}

module.exports = config
