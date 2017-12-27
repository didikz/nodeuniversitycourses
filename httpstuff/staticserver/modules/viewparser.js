var view = function(uri) {
    var baseviewpath = './resources/views',
        httpcode = 200;
    if(uri == '/') {
        baseviewpath += '/index.html';
    } else if(uri == '/hello') {
        baseviewpath += '/hello.html';
    } else {
        httpcode = 404;
        baseviewpath += '/404.html';
    }
    return {
        'httpcode': httpcode,
        'baseviewpath': baseviewpath
    };
}

exports.uriToView = view;