'use strict';

const readUserInfo = require('./realtimeUrl');

var value = readUserInfo.readUserInfo();

console.log(value);

// const DownloadImage = require('./DownloadImages');
// const srcFilename = `./${uid}/khuho.png`;
// const destFilename = `./public/images/khuho.png`;
// const bucketName = 'gs://happy-d02bd.appspot.com';

// const downloadImage = new DownloadImage(bucketName, srcFilename, destFilename);

// downloadImage.downloadFile();
