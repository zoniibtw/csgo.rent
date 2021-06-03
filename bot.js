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

class Bot {

    client = new SteamUser();
    community = new SteamCommunity();
    tradeManager = new TradeOfferManager({
        steam: this.client,
        community: this.community,
        language: 'en'
    });

    constructor(username, password, secret, identitySecret) {

        this.logOnOptions = {
            accountName: username,
            password: password,
            twoFactorCode: SteamTotp.generateAuthCode(secret)
        }
        this.identitySecret = identitySecret;

    }

    logOn() {
        this.client.logOn(this.logOnOptions);

        this.client.on('loggedOn', () => {
            console.log('Bot1 succesfully logged on.');
        });


        this.client.on('webSession', (sessionid, cookies) => {
            this.community.setCookies(cookies);
            this.community.startConfirmationChecker(20000, this.identitySecret);
        });
    }

    async getInventory() {
        this.community.getUserInventoryContents(this.client.steamID, 730, 2, true, (err, inventory) => {

            if (err) {
                throw err;
            } else {
                return inventory;
            }
        });
    }

}

var bots = new Array();
bots.push(new Bot(config.bot1.username, config.bot1.password, config.bot1.sharedSecret, config.bot1.identitySecret));
bots.push(new Bot(config.bot2.username, config.bot2.password, config.bot2.sharedSecret, config.bot2.identitySecret));

bots[0].logOn();
bots[1].logOn();


/*function declineOffer(offer) {
    offer.decline((err) => {
        if (err) console.log("There was an error declining the offer");
    })
}

function createNewOffer(tradeUrl) {
    var offer = manager.createOffer(tradeUrl);
}*/
/* ---- */

/* -- Websocket connection to botHandler using socket.io -- */

var socket = io.connect("http://localhost:3000/", {
    reconnection: true
});

//When connected construct API request. 
socket.on('connect', function () {
    console.log('connected to localhost:3000');

    socket.on('GET_INVENTORY', function () {
        socket.emit('GET_INVENTORY_RETURN', bots[0].getInventory());
    });


});

/* ---- */