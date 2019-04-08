//I require "access" to HTTPS 
var https = require('https');

// where am I requesting?

function getAndPrintHTMLChunks() {
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'

    };

    // I am GETing the 'data'
    https.get(getAndPrintHTMLChunks, function (response) {
        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            console.log('Data chunk:', data + '\n');
        });

    });
}
