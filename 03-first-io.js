var fs=require('fs');

var buf = fs.readFileSync('./text.txt');
var str = buf.toString().split('\n').length + 1;

console.log(str);
