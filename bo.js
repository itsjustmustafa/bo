var fs = require('fs');
const login = require("facebook-chat-api");
var user = fs.readFileSync("username.txt", "utf8");
var pass = fs.readFileSync("password.txt", "utf8");

// Create simple echo bot
login({email: user, password: pass}, (err, api) => {
    if(err) return console.error(err);
    
    api.listen((err, message) => {
        if (message.body.match(/[y|Y][ |e|E][ |e|E][ |e|E]*[t|T]/g) !== null) {
            api.sendMessage("yeet", message.threadID);
        }
        if (message.body.toLowerCase() === "rip") {
            api.sendMessage("rip", message.threadID);
        }
    });
});
