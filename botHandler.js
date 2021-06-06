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
            console.log('connected:', socket.client.id);

            async function getInventory() {
                return new Promise(resolve => {
                    var data;
                    socket.emit('GET_INVENTORY');
                    socket.on('GET_INVENTORY_RETURN', ret => {
                        data = JSON.stringify(ret);
                    });
                    setTimeout(() => {
                        resolve(data);
                    }, 2000);
                });
            }

            app.get('/bot/inventory', async function (req, res) {
                let response = await getInventory();
                console.log(response);
                return res.send(response);
            });

            socket.on('UPDATE_INVENTORY', ret => { 

                var sql = "INSERT INTO skin (skinID, market_name, name, icon_url, link) VALUES ";
                ret.forEach(item => {
                    if(item.commodity) {return;}
                    if (item == ret[ret.length - 1]) {
                        sql += "('" + item.id + "','" + item.market_name + "','" + item.name + "','" + item.icon_url + "','" + item.actions[0].link +"')";
                    } else {
                        sql += "('" + item.id + "','" + item.market_name + "','" + item.name + "','" + item.icon_url + "','" + item.actions[0].link +"'),";
                    } 
                });

                try {
                    con.query(sql, function (err, result) {
                        if (err){
                            console.log("Error occured on insert items query.");
                            return;
                        }
                        console.log("Updated Inventory");
                    });
                } catch (error) {
                    console.log(error);
                }

            });



        });

    });
});