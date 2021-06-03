const crypt = require('crypto-js');
const fs = require('fs');
const config = require('./testEncryption.json');


var secret = "<jm6~.6}jUFQ(@!c";
/*var us = config.bot1.username;
var ps = config.bot1.username;


var encryptedUS = crypt.AES.encrypt(us, secret);
var encryptedPS = crypt.AES.encrypt(ps, secret);

let bot1 = {
    username: encryptedUS.toString(),
    password: encryptedPS.toString()
};

let data = JSON.stringify(bot1);

fs.writeFileSync('encryptedJSON.json', data);
*/
const test = require('./encryptedJSON.json');

console.log(crypt.AES.decrypt("U2FsdGVkX1/anc0XG6mtH4GdPY7QiBdhVoN5GTdEMQM=", secret).toString(crypt.enc.Utf8));
console.log(crypt.AES.decrypt("U2FsdGVkX1/BjXA//0sUQTZ2DpUUHIgEKEhtS/Rr/sk=", secret).toString(crypt.enc.Utf8));