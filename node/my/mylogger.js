var fs = require('fs');
var os = require('os');

exports.myLogger = function (text) {
  fs.appendFile('logs/log.log', text + os.EOL, function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Saved!');
  });
};

exports.addTwoNumbers = function (x, y) {
  return x + y;
}
