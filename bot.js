/* -- Packages -- */

const express = require('express');
const config = require('./config.json');
const { privateDecrypt } = require('crypto');
const { setInterval } = require('timers');
const Bot = require('./botClass.js');
const DBQuery = require('./querySender.js');
const { timeout } = require('async');

/* ---- */

/* -- Important variables -- */
const app = express();
const DBSender = new DBQuery();


var bots = new Array();
bots.push(new Bot(config.bot1.username, config.bot1.password, config.bot1.sharedSecret, config.bot1.identitySecret));
bots.push(new Bot(config.bot2.username, config.bot2.password, config.bot2.sharedSecret, config.bot2.identitySecret));


//let wait = setTimeout(startIntervals, 5000);
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


setTimeout(() => {
    updateInventory();
}, 10000);
/*function startIntervals(){
    let updateInvInterval = setInterval(updateInventory, 20000);
}*/

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

            let skinValues = bots[i].getSkinValues(item.id); 


            trimmedJSON.push(({
                id: item.id,
                market_name: item.market_name,
                name: item.name,
                icon_url: item.icon_url,
                link: fixedLink,
                steamid: bots[i].client.steamID.accountid,
                price: '0',
                float: skinValues.paint_wear,
                patternSeed: skinValues.paint_seed
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
    let timer = 1000;
    let test = 0;

    Promise.all(unresolved).then(() => {
        /*DBSender.insertInventory(result).then(callback => {
            console.log(callback);
        });*/
        console.log(result);
        return;
    });

};






// function priceRequestQueue(market_name, timeout){
//     return new Promise(resolve => {
//         var data;

//         setTimeout(() => {
//             console.log("GO!");
//             bots[0].getItemPrice(market_name).then((value) => {
                
//                 if (value == "error") {
//                     price = "not_found";
//                 } else {
//                     //console.log(value);
//                     data = value;
//                 }
//             });
//         }, timeout);

//         setTimeout(() => {
//             if(data == undefined){
//                 data = "Request timed-out ("+ (5000 + timeout) +")";
//             }
//             resolve(data);
//         }, (25000 + timeout));
//     });
// }


/*

OLD pricequeue thingy

    // for (let item of result) {

    //     unresolved.push(priceRequestQueue(item.market_name, timer).then((value) => {
            
    //         item.price = value;
            
    //     }));

    //     timer += 1000;
    //     test ++;
    //     if(test >= 12){
    //         break;
    //     }
    // }

    OLD pricequeue thingy




*/