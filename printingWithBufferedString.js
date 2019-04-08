//I require "access" to HTTPS 
var https = require('https');

// where am I requesting?

function getAndPrintHTML() {
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'

    };

    // I am GETing the 'data'
    https.get(requestOptions, function (response) {
        let bufferingString = '';
        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            bufferingString += data;
        });

        response.on('end', function () {
            console.log('Data string:', bufferingString);
            console.log('Response stream complete.');
        });
    });
}


console.log(getAndPrintHTML());