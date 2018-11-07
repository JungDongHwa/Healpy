'use strict';
const db = require('./FirebaseInit');
const ref = db.ref("/URL");
const DownloadImage = require('./DownloadImages');

ref.on('value', function(snapshot) {
    var userInfo = snapshot.val();
    var uid = userInfo[1].uid;

    const bucketName = 'gs://happy-d02bd.appspot.com';
    const srcFilename = `images/${uid}/khuho.png`;
    const destFilename = `./public/images/khuho.png`;

    const downloadImage = new DownloadImage(bucketName, srcFilename, destFilename);    
    downloadImage.downloadFile();

    console.log(userInfo);
});
