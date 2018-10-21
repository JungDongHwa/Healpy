'use strict';

module.exports.readFile = function(f) {
    const fs = require('fs');
    console.log('파일 읽기 시작');
    
    var fileName = './public/json/';
    fileName = fileName + f;

    const data = fs.readFileSync(fileName);
    const jsonFile = JSON.parse(data);
    
    return jsonFile.people[0].pose_keypoints_2d;
}
