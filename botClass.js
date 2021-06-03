const TradeOfferManager = require("steam-tradeoffer-manager");
const SteamUser = require("steam-user");
const SteamCommunity = require("steamcommunity");

class Bot{

    client = new SteamUser();
    community = new SteamCommunity();
    tradeManager = new TradeOfferManager({
        steam: this.client,
        community: this.community,
        language: 'en' 
    });

    constructor(username, password, secret, identitySecret){
        
        this.logOnOptions = {
            accountName: username,
            password: password,
            twoFactorCode: SteamTotp.generateAuthCode(secret)
        }
        this.identitySecret = identitySecret;

    }

    logOn(){
        this.client.logOn(this.logOnOptions);

        this.client.on('loggedOn', () =>{
            console.log('Bot succesfully logged on.');
        });


        this.client.on('webSession', (sessionid, cookies) => {
            this.community.setCookies(cookies);
            this.community.startConfirmationChecker(20000, this.identitySecret);
        });
    }

    async getInventory(){
        this.community.getUserInventoryContents(this.client.steamID, 730, 2, true, (err, inventory) => {

            if (err) {
                throw err;
            } else {
                return inventory;
            }
        });
    }
    

}