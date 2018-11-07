'use strict';

const db = require('./FirebaseInit');
const ref = db.ref("/");

/**
 * API 1) Add a TODO Item with the following data 
 */
// [START API 1]
async function uploadResult (userId, date, exercise, result) {
 
    // Add a new todo item
    var itemsRef = ref.child(`healpy/${userId}/${date}/${exercise}`);
    itemsRef.set({
      
    });
    //return itemId;
}

module.exports = uploadResult;
  