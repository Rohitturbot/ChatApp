const admin = require("firebase-admin");

admin.initializeApp();
exports.onUserSatausChanged = require("./triggers/onUserSatausChanged");
