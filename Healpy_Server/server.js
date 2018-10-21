'use strict';

//const googleStorage = require('./FirebaseDownloadImages');
//const realtimeDatabase = require('./RealtimeDatabase');
const jsonfile = require('./JsonFile');

//const bucketName = 'happy-d02bd.appspot.com';
//const srcFilename = 'COCO_val2014_000000000241.jpg';
//const destFilename = './public/images/COCO_val2014_000000000241.jpg';

//googleStorage.downloadFile(bucketName, srcFilename, destFilename);

const body = jsonfile.readFile('COCO_val2014_000000000459_keypoints.json');
console.log(body);
//realtimeDatabase.addTodoItem("u1", "Go to the bank", "Wed Aug 30 2017 02:25:06 GMT+0800 (HKT)");
//var item = realtimeDatabase.readToDoItem("-LP7BQeQknXoOndXgWjE");

//console.log(item);