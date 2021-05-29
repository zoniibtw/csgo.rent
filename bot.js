/* -- Packages -- */
const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const SteamCommunity = require('steamcommunity');
const TradeOfferManager = require('steam-tradeoffer-manager');
var io = require('socket.io-client');
const express = require('express');
const config = require('./config.json');
/* ---- */

/* -- Important variables -- */
const app = express();
const client = new SteamUser();
const community = new SteamCommunity();
const manager = new TradeOfferManager({
    steam: client,
    community: community,
    language: 'en'
});
/* ---- */

//Log on options for bot. Login Username, password, Steamguard etc...
const logOnOptions = {
    accountName: config.username,
    password: config.password,
    twoFactorCode: SteamTotp.generateAuthCode(config.sharedSecret)
};

//Log on user to steam.
client.logOn(logOnOptions);

client.on('loggedOn', () => {
    console.log('User succesfully logged on.');
});

//Logs on user to steamcommunity refresh the session every 20000ms (20s).
client.on('webSession', (sessionid, cookies) => {
    community.setCookies(cookies);
    community.startConfirmationChecker(20000, config.identitySecret);
});

manager.on('newOffer', (offer) => {
    declineOffer(offer);
});

/* -- Bot Functions -- */

async function getBotInventory(){
    community.getUserInventoryContents(client.steamID, 730, 2, true, (err, inventory) => {

        if(err){
            throw err;
        } else{
            return inventory;
        }
    });
}

function declineOffer(offer){
    offer.decline((err) => {
        if(err) console.log("There was an error declining the offer");
    })
}

function createNewOffer(tradeUrl){
    var offer = manager.createOffer(tradeUrl);
}
/* ---- */

/* -- Websocket connection to botHandler using socket.io -- */

var socket = io.connect("http://localhost:3000/", {
    reconnection: true
});

socket.on('connect', function () {
    console.log('connected to localhost:3000');
    
    socket.on('GET_INVENTORY', function() {
        socket.emit('GET_INVENTORY_RETURN', getBotInventory());
    });


});

/* ---- */
