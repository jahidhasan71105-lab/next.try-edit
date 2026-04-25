const fs = require("fs");
module.exports.config = {
	name: "sad",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "juswa", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sad")==0 || (event.body.indexOf("sad")==0)) {
		var msg = {
				body: "ikaw ay nakalabaw lamaw lamaw lamaw",
				attachment: fs.createReadStream(__dirname + `/noprefix/.`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😢svent.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }") || react.includes("🙂") || react.includes("sad") || react.includes("Sad") || react.includes("Picchi") || react.includes("MrTomXxX") || react.includes("😥") || react.includes("😰") || react.includes("😨") || react.includes("😢") || react.includes("😊") || react.includes("😔") || react.includes("😞") || react.includes("depression") || react.includes("stress") || react.includes("Stress") || react.includes("Depress") || react.includes("depression") || react.includes("Depression") || react.includes("Relationship") || react.includes("Single") || react.includes("😭")) {
		var msg = {
				body: "-  আহা রে কত কষ্ট-!!😎"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
