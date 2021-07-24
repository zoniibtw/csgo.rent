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


    getSkinValues(skinID){
        for (let i = 0; i < this.csgo.inventory.length; i++) {
            try {
                if(skinID == this.csgo.inventory[i].id){
                    let callback = {
                        paint_wear: this.csgo.inventory[i].paint_wear,
                        paint_seed: this.csgo.inventory[i].paint_seed
                    };
    
                    return callback;
                }
            } catch (error) {
                return "Skin not found in bots inventory.";
            }
        }
    }

    // Function for getting a specified skins wear and float with an inspect link.
    // async getFloat(inspectLink) {
    //     return new Promise(resolve => {
    //         var data;
    //         var assetid = "";
    //         var d = "";
    //         var callback; 
    //         this.csgo.inspectItem(inspectLink, (result) => {
    //             console.log(result);
    //             data = result;
    //         });
    //         setTimeout(() => {
    //             if(data == undefined){
    //                 data = "Request timed-out (15000ms)";
    //             }
    //             resolve(data);
    //         }, 60000);
    //     });
    // };



    async getItemPrice(item) {
        return new Promise(resolve => {
            var data;
            this.community.getMarketItem(730, item, (err, marketItem) => {
                if (err) {
                    throw err;
                } else {
                    data = marketItem.lowestPrice;
                    //console.log(data);
                }
            });
            setTimeout(() => {
                if(data == undefined){
                    data = "Request timed-out (10000ms)";
                }
                resolve(data);
            }, 20000);
        });
    };

}
