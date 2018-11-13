'use strict';

const execFile = require('child_process').execFile;
const cmd = "F:/Dev/OpenPose/openpose-1.4.0-win64-cpu-binaries/bin/OpenPoseDemo.exe";
 
execFile(cmd, [], (error, stdout, stderr) => { 
    // command output is in stdout 
    if (error !== null) { 
        console.error('exec error:', error); 
        throw error;
    } 
    console.log('stdout:', stdout); 
    console.log('stderr:', stderr); 
});

// const spawn = require('child_process').spawn;

// var options = {
//     cwd:'F:\Dev\OpenPose\openpose-1.4.0-win64-cpu-binaries'
// };

// var child = spawn ( 'bin\OpenPoseDemo.exe' , [], options);

// child.stdout.on ( 'data' , function (data) {  
//     console.log ( 'stdout :'  + data);  
// });  
// child.stderr.on ( 'data' , function (data) {  
//     console.log ( 'stderr :'  + data);  
// });  
// child.on ( 'close' , function (code) {  
//     console.log ( '자식 프로세스가 코드'  + code);  
// });  
