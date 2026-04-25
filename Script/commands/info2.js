module.exports.config = {
  name: "info2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Jahid Edit",
  description: "Bot info command",
  commandCategory: "system",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  const moment = require("moment-timezone");
  const fs = require("fs");

  // Time setup
  const time = moment.tz("Asia/Dhaka").format("hh:mm:ss A");
  const date = moment.tz("Asia/Dhaka").format("DD/MM/YYYY");

  // Uptime
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);

  const msg = `
════❁ BOT INFO ❁════

🤖 Bot Name: CYBER BOT
👑 Admin: Jahid Hasan

🕒 Time: ${time}
📅 Date: ${date}

⏳ Uptime: ${hours}h ${minutes}m ${seconds}s

🌐 Facebook: https://www.facebook.com/virgin.pola.69
▶️ Tik tok: https://vm.tiktok.com/ZS9NLban6cvSo-XPuge/
💻 GitHub: nai

══════════════════
`;

  // Image attach (optional)
  const imagePath = __dirname + "/cache/info.jpg";

  if (fs.existsSync(imagePath)) {
    return api.sendMessage(
      {
        body: msg,
        attachment: fs.createReadStream(imagePath)
      },
      event.threadID
    );
  } else {
    return api.sendMessage(msg, event.threadID);
  }
};
