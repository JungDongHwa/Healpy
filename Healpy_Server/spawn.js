'use strict';

// const exec = require('child_process').execFile;
// const cmd = 'node';
 
// exec(cmd, ['--version'], (error, stdout, stderr) => { 
//     // command output is in stdout 
//     if (error !== null) { 
//         console.error('exec error:', error); 
//         throw error;
//     } 
//     console.log('stdout:', stdout); 
//     console.log('stderr:', stderr); 
// });

const spawn = require('child_process').spawn;
 
var child = spawn ( 'node' , [ '--version']);

child.stdout.on ( 'data' , function (data) {  
    console.log ( 'stdout :'  + data);  
});  
child.stderr.on ( 'data' , function (data) {  
    console.log ( 'stderr :'  + data);  
});  
child.on ( 'close' , function (code) {  
    console.log ( '자식 프로세스가 코드'  + code);  
});  
