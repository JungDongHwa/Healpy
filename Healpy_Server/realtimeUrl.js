'use strict';
const db = require('./FirebaseInit');
const ref = db.ref("/URL");
const DownloadImage = require('./DownloadImages');

ref.on('value', function(snapshot) {
    var userInfo = snapshot.val();
    //userInfo[0] or userInfo[""+0] = 1
    //userInfo[0].id = 
    var uid = userInfo[1].uid;
    //실시간으로 데이터 =>여러명이 한번에 들어오면
    

    const bucketName = 'gs://happy-d02bd.appspot.com';
    const srcFilename = `images/${uid}/khuho.png`;
    const destFilename = `./public/images/khuho.png`;

    const downloadImage = new DownloadImage(bucketName, srcFilename, destFilename);    
    downloadImage.downloadFile();
    

    console.log(userInfo);
});
