const admin = require("firebase-admin");

admin.initializeApp();
exports.onUserSatausChanged = require("./triggers/onUserSatausChanged");
exports.onCleaverBotMessage = require("./triggers/onCleaverBotMessage");
