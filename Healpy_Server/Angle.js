'use strict';

const jsonfile = require('./JsonFile');
const body = jsonfile.readFile('COCO_val2014_000000000459_keypoints.json');

const RShoulderX = body[6];
const RShoulderY = body[7];
const RElbowX = body[9];
const RElbowY = body[10];
const RWristX = body[12];
const RWristY = body[13];

const LShoulderX = body[15];
const LShoulderY = body[16];
const LElbowX = body[18];
const LElbowY = body[19];
const LWristX = body[21];
const LWristY = body[22];

function calculateAngle(x1, y1, x2, y2) {
    let result = (Math.atan2(y1, x1) / Math.atan2(y2, x2)) * 180 / Math.PI;

    if (result < 0) {
        result = - result;
    }
    return result;
}

module.exports = calculateAngle;
