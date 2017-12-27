
var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, 'utf8',function(err, data) {
    if(err) {
        console.log('error read data');
        return;
    }
    var count = data.split('\n').length - 1;
    console.log(count);
});