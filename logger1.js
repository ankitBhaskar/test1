const path=require('path');

var pathObjectFile=path.parse(__filename);
var pathObjectDir=path.parse(__dirname);
console.log(pathObjectFile);
console.log(pathObjectDir);

const os=require('os');
var totalMemory =os.totalmem();
var FreeMemory =os.freemem();

console.log(`total memory : ${totalMemory}`);
console.log(`total memory : ${FreeMemory}`);