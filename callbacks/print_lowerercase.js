var getHTML = require('../http-functions');

function printHTML(html) {
    console.log(html);
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '//http-examples/step6/lowercase.html'
};

function printLowerCase(html) {
    let lowerCaseString = '';
    lowerCaseString = html.toLowerCase();
    console.log(lowerCaseString);
};

console.log(getHTML(requestOptions, printLowerCase));