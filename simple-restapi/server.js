var http = require('http');
var querystring = require('querystring');
var dbclient = require('mongodb').MongoClient;

var dburl = process.env.MONGODB_URL || 'mongodb://@127.0.0.1:27017/nodeuniversity'

dbclient.connect(dburl, function(error, client) {
    if(error) return console.error(error);

    var collection = client.db('nodeuniversity').collection('messages');

    var app = http.createServer(function(request, response) {
        var origin = (request.headers.origin || '*')

        if(request.method == 'OPTIONS') {
            response.writeHead('204', 'No Content', {
                'Access-Control-Allow-Origin': origin,
                'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS, DELETE',
                'Access-Control-Allow-Headers': 'content-type, accept',
                'Access-Control-Max-Age': 10, // in seconds,
                'Content-Length': 0
            });
            response.end();
        } else if(request.method == 'GET' && (request.url === '/messages' || request.url === '/messages/')) {
            collection.find().toArray(function(error, result) {
                if(error) return console.error(error);

                var body = JSON.stringify(result);

                response.writeHead('200', {
                    'Access-Control-Allow-Origin': origin,
                    'Content-Type': 'text/plain',
                    'Content-Length': body.length
                })
                response.end(body);
            });
        } else if(request.method == 'POST' && (request.url === '/messages' || request.url === '/messages/')) {
            request.on('data', function(data) {
                console.log('RECEIVED DATA: ');
                data = data.toString('utf-8');
                console.log(data);
                try {
                    data = JSON.parse(data);
                } catch(error) {
                    return console.error(error);
                }
                collection.insert(data, {safe: true}, function(error, obj) {
                    if(error) return console.error(error);
                    var body = JSON.stringify(obj);
                    response.writeHead('200', {
                        'Access-Control-Allow-Origin': origin,
                        'Content-Type': 'text/plain',
                        'Content-Length': body.length
                    })
                    response.end(body);
                });
            });
        } else { 
            response.writeHead('200', {
                'Access-Control-Allow-Origin': origin,
                'Content-Type': 'application/json'
            });
            response.end("{message: 'GTFO'}");
        }
    });

    app.listen(3000, function() {
        console.log('server listening port 3000');
    });
});