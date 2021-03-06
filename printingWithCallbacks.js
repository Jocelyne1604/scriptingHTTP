//I require "access" to HTTPS 
var https = require('https');

// where am I requesting?

function getHTML(options, callback) {
    var options = {
        host: this.host,
        path: this.path
    }
    // I am GETing the 'data'
    https.get(options, function (response) {
        let bufferingString = '';
        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            bufferingString += data;
        });

        response.on('end', function () {
            callback(bufferingString);
            console.log('Response stream complete.');
        });
    });
}
function printHTML(html) {
    console.log(html);
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'

};


console.log(getHTML(requestOptions, printHTML));