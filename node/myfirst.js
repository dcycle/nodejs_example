var http = require('http');
var dt = require('./myfirstmodule');
var log = require('./mylogger');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("x The date and time are currently: " + dt.myDateTime());
  res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  fs.readFile('myfile.html', function(err, data) {
    if (err) {
      log.myLogger(err);
    }
    if (data) {
      res.write(data);
    }
    res.end();
  });
  log.myLogger('Request ' + req.url);
}).listen(8080);
