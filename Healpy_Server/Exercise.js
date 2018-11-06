'use strict';

const jsonfile = require('./JsonFile');
const Angle = require('./Angle');
const body = jsonfile.readFile('KakaoTalk_20181105_180153932_keypoints.json');

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

class Exercise {
    analyze() {

    }
}

class PushUp extends Exercise {
    
    analyze() {
        let x1 = RShoulderX - RElbowX;
        let y1 = RShoulderY - RElbowY;
        let x2 = RWristX - RElbowX;
        let y2 = RWristY - RElbowY;
    
        let RElbowAngle = Angle(x1, y1, x2, y2);

        return RElbowAngle;
    }
}

module.exports = PushUp;