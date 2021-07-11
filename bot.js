/* -- Packages -- */

var io = require('socket.io-client');
const express = require('express');
const config = require('./config.json');
const { privateDecrypt } = require('crypto');
const { setInterval } = require('timers');
const { request } = require('http');
const Bot = require('./botClass.js');
const DBQuery = require('./querySender.js');

/* ---- */

/* -- Important variables -- */
const app = express();
const DBSender = new DBQuery();


var bots = new Array();
bots.push(new Bot(config.bot1.username, config.bot1.password, config.bot1.sharedSecret, config.bot1.identitySecret));
bots.push(new Bot(config.bot2.username, config.bot2.password, config.bot2.sharedSecret, config.bot2.identitySecret));
bots.push(new Bot(config.bot3.username, config.bot3.password, config.bot3.sharedSecret, config.bot3.identitySecret));

let wait = setTimeout(startIntervals, 5000);
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


//console.log(bots[0].csgo.haveGCSession);

function startIntervals(){
    let updateInvInterval = setInterval(updateInventory, 20000);
}

async function updateInventory() {

    let result = new Array();

    for (let i = 0; i < bots.length; i++) {
        let trimmedJSON = new Array();
        let botInventory = await bots[i].getInventory();
        botInventory.forEach(item => {
            if (item.commodity) {
                return;
            }

            let fixedLink = item.actions[0].link;
            fixedLink = fixedLink.replace("%owner_steamid%", bots[i].id);
            fixedLink = fixedLink.replace("%assetid%", item.id);

            trimmedJSON.push(({
                id: item.id,
                market_name: item.market_name,
                name: item.name,
                icon_url: item.icon_url,
                link: fixedLink,
                steamid: bots[i].client.steamID.accountid,
                price: '0',
                float: '0',
                patternSeed: ''
            }));
        });

        if (trimmedJSON.length > 0) {
            //console.log(trimmedJSON);
            trimmedJSON.forEach(item => {
                result.push(item);
            });
        }
    }

    let unresolved = new Array();
    for (let item of result) {

        unresolved.push(bots[0].getFloat(item.link).then((value) => {
            if (value == undefined) {
                item.float = "not_found";
                item.patternSeed = "not_found";
            } else {
                item.float = value.paintwear;
                item.patternSeed = value.paintindex;
            }
        }));

        unresolved.push(bots[0].getItemPrice(item.market_name).then((value) => {
            if (value == "error") {
                price = "not_found";
            } else {
                //console.log(value);
                item.price = value;
            }
        }));
    }

    Promise.all(unresolved).then(() => {
        DBSender.insertInventory(result).then(callback => {
            console.log(callback);
        });
        return;
    });

};