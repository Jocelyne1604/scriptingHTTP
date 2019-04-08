var getHTML = require('../http-functions');

function printHTML(html) {
    console.log(html);
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '//http-examples/step6/lowercase.html'
};

function printReverse(html) {
    let reverseString = '';
    reverseString = html.split("").reverse().join("");
    console.log(reverseString);
};

console.log(getHTML(requestOptions, printReverse));