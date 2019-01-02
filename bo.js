var fs = require('fs');
const shell = require('shelljs');

const login = require("facebook-chat-api");
var user = fs.readFileSync("username.txt", "utf8");
var pass = fs.readFileSync("password.txt", "utf8");

// Create simple echo bot
login({email: user, password: pass}, (err, api) => {
    if(err) return console.error(err);
    
    api.listen((err, message) => {
        if (message.body.toLowerCase.match(/yee[e]*t/g) !== null) {
            api.sendMessage("yeet", message.threadID);
        }
        if (message.body.toLowerCase.match(/[y]+e[e]+[h]+[a]+[w]+/g) !== null) {
            api.sendMessage("🤠", message.threadID); //not sure if this will work, as its an emoji
        }
        //good-night message
        if (message.body.toLowerCase..match(/go[o]+d[\s|-]+night bo/g) !== null) {
            api.sendMessage("goodnight 🌃", message.threadID);
        }
        //good-morning message
        if (message.body.toLowerCase..match(/go[o]+d[\s|-]+morning bo/g) !== null) {
            api.sendMessage("goodmorning 🌞", message.threadID);
        }
        //geeting message
        if (message.body.toLowerCase.match(/(hey|hello|yo|wassup)\sbo/g) !== null) {
            api.sendMessage("hi!", message.threadID);
        }
        if (message.body.toLowerCase() === "rip") {
            api.sendMessage("rip", message.threadID);
        }
        if (message.body.toLowerCase() === "reboot") {
            api.sendMessage("Goodnight", message.threadID);
            shell.exec('./rebot.sh');
        }
    });
});
