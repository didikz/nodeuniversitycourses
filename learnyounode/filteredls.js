var fs = require('fs');

fs.readdir(process.argv[2], function(err, data) {
    if(err) {
        return console.log(err);
    }
    data.forEach(function(value, index) {
        var splitted = value.split('.');
        if(splitted.length > 1 && splitted[1] == process.argv[3]) {
            console.log(value);
        }
    });
    // console.log(finalData);
});