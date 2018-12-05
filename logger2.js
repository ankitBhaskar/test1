const fs=require('fs');

// var file=fs.readdirSync('./');
// console.log(file);

fs.readdir('./', function(err,files){
    if (err) console.log('Error',err);
    else console.log('result',files)
})