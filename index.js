var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req.headers);
  res.send('Hello World!');
});

var server = app.listen(3000, "10.1.227.96", function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
