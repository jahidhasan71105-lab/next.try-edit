module.exports.config = {
  name: "mv",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "xem ảnh hiện có trên bot",
  commandCategory: "nsfw",
  usages: "",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
   
   const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');

     if (args.length == 0) return api.sendMessage(`🎞 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐕𝐢𝐝𝐞𝐨 🎞\n\n𝟏. 𝐌𝐯 𝐆𝐚́𝐢 ❤️\n𝟐. 𝐌𝐯 𝐬𝐞𝐱 💚\n𝟑. 𝐌𝐯 𝐭𝐢𝐤𝐭𝐨𝐤 💜\n\n𝐃𝐮̀𝐧𝐠 /𝐦𝐯  (𝐯𝐢𝐝𝐞𝐨 𝐛𝐚̣𝐧 𝐜𝐚̂̀𝐧 𝐱𝐞𝐦)\n
`, event.threadID, event.messageID);

     if (args[0] == "gái") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apiuwuapi.ducdz999.repl.co/videogaixinh').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Video gái xinh nè <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "chill") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apiuwuapi.ducdz999.repl.co/images/videochill').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Video tiktok nè <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
    if (args[0] == "sex") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apiuwuapi.ducdz999.repl.co/videosex').then(res => {
  var video = res.data.url;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Video sex nè <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
}
