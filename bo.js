var fs = require('fs');
const shell = require('shelljs');

const login = require("facebook-chat-api");
const dict = require("owlbot-dictionary");

var user = fs.readFileSync("username.txt", "utf8");
var pass = fs.readFileSync("password.txt", "utf8");

// Create simple echo bot
login({email: user, password: pass}, (err, api) => {
    if(err) return console.error(err);
    
    api.listen((err, message) => {
        if (message.body.toLowerCase.match(/y(\s)*e(\s)*e(\s)*(e|\s)*(\s)*t/g) !== null) {
            api.sendMessage("yeet", message.threadID);
        }
        if (message.body.toLowerCase.match(/[y]+e[e]+[h]+[a]+[w]+/g) !== null) {
            api.sendMessage("🤠", message.threadID); //not sure if this will work, as its an emoji
        }
        //good-night message
        if (message.body.toLowerCase.match(/go[o]+d[\s|-]+night bo/g) !== null) {
            api.sendMessage("goodnight 🌃", message.threadID);
        }
        //good-morning message
        if (message.body.toLowerCase.match(/go[o]+d[\s|-]+morning bo/g) !== null) {
            api.sendMessage("goodmorning 🌞", message.threadID);
        }
        //geeting message
        if (message.body.toLowerCase.match(/(hey|hello|yo|wassup)\sbo/g) !== null) {
            api.sendMessage("hi!", message.threadID);
        }        
        if (message.body.toLowerCase.match(/bo\sdefine\s([^\s]+)/g) !== null) {
            r = /bo\sdefine\s([^\s]*)/;
            word = r.exec(message.body.toLowerCase())[1];
            
            msg = dict.define(word).then(function(def){
                if(def.length == 0){
                    api.sendMessage("i dont know what "+word+" means 😥");
                }else{
                    api.sendMessage(word+": "+def[0].defenition, message.threadID);
                }
            });
            
            dict.define(word).then(function(def){
                api.sendMessage(word+": "+def[0].defenition, message.threadID);
            });
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
