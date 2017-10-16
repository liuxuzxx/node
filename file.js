var fs = require("fs");

var in_stream = fs.readFileSync('input.txt');
console.log(in_stream.toString());
