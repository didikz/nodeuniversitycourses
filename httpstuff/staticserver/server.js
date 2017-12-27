var http = require('http'),
    url = require('url'),
    viewparser = require('./modules/viewparser'),
    responseParser = require('./modules/responseparser'),
    port = process.argv[2] || 3000;

var server = http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
    
    // get base view & http code
    var viewData = viewparser.uriToView(uri);

    // parse response
    responseParser.parseResponse(response, viewData.baseviewpath, viewData.httpcode);
});

server.listen(parseInt(port, 10), function() {
    console.log('server is running');
});