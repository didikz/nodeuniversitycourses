var http = require('http');

var server = http.createServer(function(req, res) {
    console.log(req.url);
    console.log(req.method);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world');
});

server.listen(3000, function() {
    console.log('server is running on :3000');
});