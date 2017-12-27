
var filtermodule = require('./filteredlistmodule');
var dirpath = process.argv[2];
var extension = process.argv[3];

var data = filtermodule.filter(dirpath, extension, function(err, data) {
    if(err) {
        return console.log(err);
    }    
});

console.log(data);