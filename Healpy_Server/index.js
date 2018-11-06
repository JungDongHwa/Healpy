'use strict';

// [START import]
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');
// [END import]

const serviceAccount = require("./service/happy-serviceKey.json");
admin.initializeApp(functions.config().firebase);

exports.generateThumbnail = functions.storage.object().onFinalize(async (object) => {
    console.log("cloud function");
});
