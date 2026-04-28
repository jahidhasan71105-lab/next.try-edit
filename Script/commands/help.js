const axios = require("axios");

module.exports.config = {
  name: "help",
  version: "2.0.0",
  hasPermission: 0,
  credits: "ChatGPT",
  description: "Show all commands (no miss, Mirai)",
  commandCategory: "system",
  usages: "/helpall",
  cooldowns: 2
};

module.exports.run = async function({ api, event }) {
  const { threadID, messageID } = event;

  const fbUID = "61576990215664";

  let commandList = [];

  try {
    // 👉 Mirai command map
    const commands = global.client.commands;

    for (let [name, cmd] of commands) {
      commandList.push(name);
    }

  } catch (e) {
    return api.sendMessage("❌ Command load error!", threadID, messageID);
  }

  const msg = `
╔════✦ HELP ALL ✦════╗

🤖 Total Commands: ${commandList.length}

📌 Commands:
${commandList.map(cmd => `• ${cmd}`).join("\n")}

╚════════════════════╝
`;

  const avatarURL = `https://graph.facebook.com/${fbUID}/picture?width=512&height=512`;

  try {
    const img = (await axios.get(avatarURL, { responseType: "stream" })).data;

    return api.sendMessage(
      {
        body: msg,
        attachment: img
      },
      threadID,
      messageID
    );

  } catch (e) {
    return api.sendMessage(msg, threadID, messageID);
  }
};
