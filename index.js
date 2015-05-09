var express = require('express');
var path = require('path');
var app = express();

var keys = {
  headers: 'headers'
};

app.set('port', (process.env.PORT || 5000));
app.set(keys.headers, []);
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  var headers = app.get(keys.headers);
  headers.push(req.headers);
  if(headers.length > 10)
    headers.shift();
  app.set(keys.headers, headers);
  res.send('PONG');
});

app.get('/headers', function (req, res) {
  var headers = app.get(keys.headers);
  res.json(headers);
});

var server = app.listen(app.get('port'), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
