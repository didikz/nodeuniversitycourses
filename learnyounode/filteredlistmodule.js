var fs = require('fs');

var filter = function(path, extension) {

    var finalData = [];
    fs.readdir(path, function(err, data) {
        if(err) {
            return console.log(err);
        }
        data.forEach(function(value, index) {
            var splitted = value.split('.');
            if(splitted.length > 1 && splitted[1] == process.argv[3]) {
                finalData.push(value)
            }
        });
    });
    return finalData;
}

exports.filter = filter;