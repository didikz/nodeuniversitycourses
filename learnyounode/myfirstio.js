var fs = require('fs');

var file = process.argv[2];

var string = fs.readFileSync(file).toString().split('\n').length - 1;
console.log(string);
