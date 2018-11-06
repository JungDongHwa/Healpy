'use strict';

function calculateAngle(x1, y1, x2, y2) {
    let result = (Math.atan2((y1), (x1)) / Math.atan2((y2), (x2))) * 180 / Math.PI;

    if(result < 0)
        result = -result;

    return result;
}

module.exports = calculateAngle;