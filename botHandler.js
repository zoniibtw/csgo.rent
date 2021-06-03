/*-- Packages --*/
const express = require('express');
const socket = require('socket.io');
const https = require('https');
const {
    execFile
} = require('child_process');
/* ---- */

const app = express();
var server = app.listen(3000, function(){
    var io = socket(server);

    var connectedClient = io.on('connection', function (socket) {
        console.log('connected:', socket.client.id);

        app.get('/bot/inventory', (req, res) => {
            socket.emit('GET_INVENTORY');
            socket.on('GET_INVENTORY_RETURN', ret => {
                res.send(ret);
                res.end();
            });
        });

    });

});



/*
execFile('runBot.bat', (error, stout, stderr) => {
    if (error) {
        console.log('error:' + error.message);
        return;
    }
    if (stderr) {
        console.log('stderr: ${stderr}');
        return;
    }
    console.log('stdout: {stdout}');
});
*/

/*https.get('localhost:3000/bot/inventory', (resp) => {
    let data = '';
    
    resp.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
*/








/*
app.get('/', (req, res) => {
    res.send(getBotInventory());
});

app.listen(3000, () => console.log('Listening on port 3000'));

*/