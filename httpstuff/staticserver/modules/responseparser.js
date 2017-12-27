var fs = require('fs');

var response = function(response, baseviewpath, httpcode) {
    fs.readFile(baseviewpath, 'binary', function(err, file) {
        if(err) {
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.write(err + '\n');
            response.end();
            return;
        }
        response.writeHead(httpcode, {'Content-Type': 'text/html'});
        response.write(file, 'binary');
        response.end();
    });
}

exports.parseResponse = response;