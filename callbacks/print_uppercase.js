var getHTML = require('../http-functions');

function printHTML(html) {
    console.log(html);
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
};

function printUpperCase(html) {
    let upperCaseString = '';
    upperCaseString = html.toUpperCase();
    console.log(upperCaseString);
};

console.log(getHTML(requestOptions, printUpperCase));