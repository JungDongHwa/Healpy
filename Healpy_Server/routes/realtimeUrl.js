'use strict';

var express = require('express');
const firebase = require("firebase");
 
// Initialize Firebase
const config = {
    apiKey: "AIzaSyDFhptBl8xiQDR2zuQOl2Ap4NLw1qO0h7M",
    authDomain: "happy-d02bd.firebaseapp.com",
    databaseURL: "https://happy-d02bd.firebaseio.com",
    projectId: "happy-d02bd",
    storageBucket: "happy-d02bd.appspot.com",
    messagingSenderId: "663932731539"
};
    
firebase.initializeApp(config);

var ref = firebase.database().ref('URL');

ref.on('value', function(snapshot) {
    var value = snapshot.val();
    // updateStarCount(postElement, snapshot.val());

    console.log(value);
});
