/*-- Packages --*/
const mysql = require('mysql');
const dbInfo = require("./db.json");
const express = require('express');
const socket = require('socket.io');
const https = require('https');
/* ---- */

const app = express();

var con = mysql.createConnection({
    host: dbInfo.host,
    user: dbInfo.user,
    password: dbInfo.password,
    database: dbInfo.database
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database.");

    var server = app.listen(3000, function () {
        console.log("Listening to port 3000.");
        var io = socket(server);

        var connectedClient = io.on('connection', function (socket) {
            //requirePrice();
            console.log('connected:', socket.client.id);

            socket.on('UPDATE_INVENTORY', ret => { 

                console.log(ret);

                var sql = "INSERT INTO skin (skinID, market_name, name, icon_url, link, steamID, price) VALUES ";
                ret.forEach(item => {
                    if (item == ret[ret.length - 1]) {
                        sql += "('" + item.id + "','" + item.market_name + "','" + item.name + "','" + item.icon_url + "','" + item.link + "','" + item.steamid + "','" + item.price + "')";
                    } else {
                        sql += "('" + item.id + "','" + item.market_name + "','" + item.name + "','" + item.icon_url + "','" + item.link + "','" + item.steamid + "','" + item.price + "'),";
                    } 
                });

                try {
                    con.query(sql, function (err, result) {
                        if (err){
                            console.log("Error occured on insert items query.");
                            return;
                        } else {
                            console.log("Updated Inventory..");
                            console.log("Database: '" + result + "'");
                            requirePrice();
                        }
                    });
                } catch (error) {
                    console.log(error);
                }

            });

            function requirePrice(){

                let sql = "SELECT * FROM skin";
                let skins;
    
                con.query(sql, function (err, result) {
                    if (err){
                        console.log("Error occured on fetching items query.");
                        return;
                    } else {
                        console.log("Retrieved Items...");
                        socket.emit('UPDATE_PRICES', result);
                    }
                })
            
            }
        });
    });
});