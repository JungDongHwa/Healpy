'use strict';

// const googleStorage = require('./FirebaseDownloadImages');

// const bucketName = 'happy-d02bd.appspot.com';
// const srcFilename = 'COCO_val2014_000000000241.jpg';
// const destFilename = './public/images/COCO_val2014_000000000241.jpg';

// const firebase = new googleStorage(bucketName, srcFilename, destFilename);

// firebase.downloadFile(bucketName, srcFilename, destFilename);

const PushUp = require('./Exercise');
const uploadResult = require('./UploadResult');
const pushUp = new PushUp();

var result = pushUp.analyze();
uploadResult(2, 20181105, "PullUp", result);
console.log(result);
