'use strict';


/* -- Steam Dependencies -- */
const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const SteamCommunity = require('steamcommunity');
const TradeOfferManager = require('steam-tradeoffer-manager');
const GlobalOffensive = require('globaloffensive');

/* ---- */

module.exports = class Bot {

    client = new SteamUser();
    community = new SteamCommunity();
    csgo = new GlobalOffensive(this.client);
    id;
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
            this.client.gamesPlayed([730]);
            this.id = this.client.steamID;
        });


        this.client.on('webSession', (sessionid, cookies) => {
            this.community.setCookies(cookies);
            this.community.startConfirmationChecker(20000, this.identitySecret);
        });
    }

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

    async getFloat(inspectLink) {
        return new Promise(resolve => {
            var data;

            this.csgo.inspectItem(inspectLink, (result) => {
                data = result;
            });
            setTimeout(() => {
                resolve(data);
            }, 15000);
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
