var io = require('socket.io-client');
var socket = io.connect("http://localhost:3000/", {
    reconnection: true
});

socket.on('connect', function () {
    console.log('connected to localhost:3000');
    
    socket.on('GET_INVENTORY', function() {
        console.log("OK");
        socket.emit('GET_INVENTORY_RETURN', "bliblo");
    });


});