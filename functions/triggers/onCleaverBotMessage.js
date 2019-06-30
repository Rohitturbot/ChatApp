const functions = require("firebase-functions");
const admin = require("firebase-admin");

const db = admin.firestore();

const bot = {
  displayName: "cleverbot",
  picture: "https://i.imgur.com/ydOMC2c.png",
  uid: "cleverbot",
  status: {
    lastChanged: new Date(),
    state: "online"
  },
  channel: {
    general: true
  }
};

db.collection("user")
  .doc(bot.uid)
  .set(bot, { merge: true });
let messagesForBot = ["Hey, Whats up ?", "Ok", "masti", "all Good ?"];

function newMessageForBot() {
  let rn = Math.floor(Math.random() * messagesForBot.length);
  return messagesForBot[rn];
}

module.exports = functions.firestore
  .document("channel/general/messages/{messageId}")
  .onCreate((doc, context) => {
    const message = doc.data();
    if (!message.text.startsWith("@cleverbot")) {
      return;
    }
    return db.collection("channel/general/messages").add({
      text: newMessageForBot(),
      user: db.collection("user").doc("cleverbot"),
      createAt: new Date()
    });
  });
