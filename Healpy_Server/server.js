'use strict';

const firebase = require('firebase');

// Initialize Firebase
var config = {
apiKey: "AIzaSyDFhptBl8xiQDR2zuQOl2Ap4NLw1qO0h7M",
authDomain: "happy-d02bd.firebaseapp.com",
databaseURL: "https://happy-d02bd.firebaseio.com",
projectId: "happy-d02bd",
storageBucket: "happy-d02bd.appspot.com",
messagingSenderId: "663932731539"
};

firebase.initializeApp(config);

var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});
