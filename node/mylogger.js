var fs = require('fs');

exports.myLogger = function (text) {

  fs.appendFile('log2.txt', text, function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Saved!');
  });

};

exports.addTwoNumbers = function (x, y) {
  return x + y;
}
