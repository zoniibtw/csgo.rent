/* -- Packages -- */

/* -- Steam Dependencies -- */
const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const SteamCommunity = require('steamcommunity');
const TradeOfferManager = require('steam-tradeoffer-manager');
/* ---- */

var io = require('socket.io-client');
const express = require('express');
const config = require('./config.json');
const {
    privateDecrypt
} = require('crypto');
const { setInterval } = require('timers');
const { request } = require('http');

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
            console.log('Bot succesfully logged on.');
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
                    return;
                }
            });
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    };


    async getItemPrice(item) {
        return new Promise(resolve => {
            var data;
            this.community.getMarketItem(730, item, (err, marketItem) => {
                if (err) {
                    data = "error";
                } else {
                    data = marketItem.lowestPrice;
                    //console.log(data);
                }
            });
            setTimeout(() => {
                resolve(data);
            }, 5500);
        });
    };
}

var bots = new Array();
bots.push(new Bot(config.bot1.username, config.bot1.password, config.bot1.sharedSecret, config.bot1.identitySecret));
bots.push(new Bot(config.bot2.username, config.bot2.password, config.bot2.sharedSecret, config.bot2.identitySecret));
bots.push(new Bot(config.bot3.username, config.bot3.password, config.bot3.sharedSecret, config.bot3.identitySecret));

let wait = setTimeout(connectToSocket, 5000); 
bots.forEach(bot => {
    bot.logOn();
});

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

function connectToSocket() {
    //Connect to socket on port 3000. 
    var socket = io.connect("http://localhost:3000/", {
        reconnection: true
    });

    console.log("Connected to socket!");

    let updateInvInterval = setInterval(updateInventory, 10000);
    //Update Inventory
    async function updateInventory() {

        let result = new Array();

        for (let i = 0; i < bots.length; i++) {
            let trimmedJSON = new Array();
            let botInventory = await bots[i].getInventory();
            botInventory.forEach(item => {
                if (item.commodity) {
                    return;
                }

                trimmedJSON.push(({
                    id: item.id,
                    market_name: item.market_name,
                    name: item.name,
                    icon_url: item.icon_url,
                    link: item.actions[0].link,
                    steamid: bots[i].client.steamID.accountid,
                    price: '0'
                }));
            });

            if(trimmedJSON.length > 0){
                //console.log(trimmedJSON);
                trimmedJSON.forEach(item => {
                    result.push(item);
                });
            }
        }

        let unresolved = new Array();
        for(let item of result){
            unresolved.push(bots[0].getItemPrice(item.market_name).then((value) => {
                if(value == "error") {
                    price = null;
                }
                else {
                    console.log(value);
                    item.price = value;
                }
            }));
        }

        Promise.all(unresolved).then(() => {
            socket.emit('UPDATE_INVENTORY', result);
            console.log("Sent inventory!");
            return;
        });

    };

    socket.on('UPDATE_PRICES', (ret) => {
     


    });
}