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
        this.isLoggedOn = false;
    }

    logOn() {
        this.client.setOption("promptSteamGuardCode", false);
        this.client.logOn(this.logOnOptions);

        this.client.on('loggedOn', () => {
            console.log('Bot1 succesfully logged on.');
            this.isLoggedOn = true;
        });


        this.client.on('webSession', (sessionid, cookies) => {
            this.community.setCookies(cookies);
            this.community.startConfirmationChecker(20000, this.identitySecret);
        });
    }

    /*async getInventory() {
        return this.community.getUserInventoryContents(this.client.steamID, 730, 2, true, (err, inventory) => {
            if (err) {
                throw err;
            } else {
                return inventory;
            }
        });
    }*/

    async getInventory() {
        return new Promise(resolve => {
            var data;
            this.community.getUserInventoryContents(this.client.steamID, 730, 2, true, (err, inventory) => {
                if (err) {
                    throw err;
                } else {
                    data = inventory;
                }
            });
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    };

}

var bots = new Array();
bots.push(new Bot(config.bot1.username, config.bot1.password, config.bot1.sharedSecret, config.bot1.identitySecret));
bots.push(new Bot(config.bot2.username, config.bot2.password, config.bot2.sharedSecret, config.bot2.identitySecret));
bots.push(new Bot(config.bot3.username, config.bot3.password, config.bot3.sharedSecret, config.bot3.identitySecret));

bots.forEach(bot => {
    bot.logOn();
});
connectToSocket();

function checkBots() {

    bots.forEach(bot => {
        if (!bot.isLoggedOn) {
            return false;
        }
    });
    return true;
}


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

//When connected construct API request. 
function connectToSocket() {

    var socket = io.connect("http://localhost:3000/", {
        reconnection: true
    });

    socket.on('connect', function () {
        console.log('connected to localhost:3000');

        socket.on('GET_INVENTORY', async function () {
            let result = await bots[2].getInventory();

            socket.emit('GET_INVENTORY_RETURN', result);
            return;
        });
    });
    setInterval(async function() {
        let result = await bots[2].getInventory();
        
        //console.log(result);

        socket.emit('UPDATE_INVENTORY', result);
        return;
    }, 60000)
    
}