angular.module('starter.services', [])

.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        client: 'Telstra',
        date_created: new Date(),
        status: 'progress'
    }, {
        id: 1,
        name: 'Max Lynx',
        client: '7-Eleven',
        date_created: new Date(),
        status: 'progress'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        client: 'Telstra',
        date_created: new Date(),
        status: 'progress'
    }, {
        id: 3,
        name: 'Perry Governor',
        client: '7-Evelen',
        date_created: new Date(),
        status: 'progress'
    }, {
        id: 4,
        name: 'Mike Harrington',
        client: 'BUPA',
        date_created: new Date(),
        status: 'progress'
    }];

    return {
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});
