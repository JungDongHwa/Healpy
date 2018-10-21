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

var RElbowAngle = (Math.atan2((RShoulderY - RElbowY), (RShoulderX - RElbowX))
                /Math.atan2((RWristY - RElbowY), (RWristX - RElbowX))) * 180 / Math.PI;

if(RElbowAngle < 0)
    RElbowAngle = -RElbowAngle;
console.log(RElbowAngle);