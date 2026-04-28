module.exports.config = {
  name: "addjahid",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Jahid",
  description: "Auto add 2 IDs to group",
  commandCategory: "group",
  usages: "/addjahid",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const threadID = event.threadID;

  // 👉 যেই ID গুলা add হবে
  const uids = [
    "61576990215664", // ID 1
    "61573274087932"  // ID 2
  ];

  try {
    for (let uid of uids) {
      await api.addUserToGroup(uid, threadID);
    }

    return api.sendMessage("✅ Successfully add korar try korsi 😎", threadID);
  } catch (e) {
    return api.sendMessage("❌ Add korte parlam na! Maybe privacy/block ase 😒", threadID);
  }
};
