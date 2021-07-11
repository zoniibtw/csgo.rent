'use strict';

/*-- Packages --*/
const mysql = require('mysql');
const dbInfo = require("./db.json");
const express = require('express');
/* ---- */

const app = express();

module.exports = class db {

    connected = false;

    con = mysql.createConnection({
        host: dbInfo.host,
        user: dbInfo.user,
        password: dbInfo.password,
        database: dbInfo.database
    });

    constructor() {
        this.con.connect(function (err) {
            if (err) throw err;
            this.connected = true;

        });
    }

    async insertInventory(inv) {

        return new Promise(resolve => {
            let data = '';

            var sql = "INSERT INTO skin (skinID, market_name, name, icon_url, link, steamID, price, float_value, patternSeed) VALUES ";
            inv.forEach(item => {
                if (item == inv[inv.length - 1]) {
                    sql += "('" + item.id + "','" + item.market_name + "','" + item.name + "','" + item.icon_url + "','" + item.link + "','" + item.steamid + "','" + item.price + "','" + item.float + "','" + item.patternSeed + "')";
                } else {
                    sql += "('" + item.id + "','" + item.market_name + "','" + item.name + "','" + item.icon_url + "','" + item.link + "','" + item.steamid + "','" + item.price + "','" + item.float + "','" + item.patternSeed + "'),";
                }
            });

            try {
                this.con.query(sql, function (err, result) {
                    if (err) {
                        data = "Error occured on insert items query.";
                        return;
                    } else {
                        data = "Database: '" + result + "'";
                    }
                });
            } catch (error) {
                data = error;
            }

            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
    }

    /*requirePrice() {
    
        let sql = "SELECT * FROM skin";
        let skins;
    
        this.con.query(sql, function (err, result) {
            if (err) {
                console.log("Error occured on fetching items query.");
                return;
            } else {
                console.log("Retrieved Items...");
                socket.emit('UPDATE_PRICES', result);
            }
        })
    
    }*/
}