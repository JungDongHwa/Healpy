'use strict';

// [START imports]
const admin = require("firebase-admin");
// [END imports]
 
// [START initialize]
// Initialize the app with a service account, granting admin privileges
const serviceAccount = require("./service/happy-serviceKey.json");
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "//happy-d02bd.firebaseio.com/"
});
// [END initialize]

// Get a database reference to the TODO list database
const db = admin.database();
const ref = db.ref("/");

/**
 * API 1) Add a TODO Item with the following data 
 */
// [START API 1]
async function uploadResult(id, date, exercise, result) {
 
    // Add a new todo item
    var itemsRef = ref.child(`healpy/${id}/${date}`);
    itemsRef.set({
      "Exercise": exercise,
      "result": result,
    });
   
    var itemId = itemsRef.key;
    console.log("A new TODO item with ID " + itemId + " is created.");  
    //return itemId;
}

module.exports = uploadResult;