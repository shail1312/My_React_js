var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.use(function (req,resp,next) {
  if(req.headers['x-forworded-proto'] == 'http'){
    next();
  } else {
    resp.redirect('http://'+req.hostname+req.url);
  }
});

app.use(express.static('public'));

app.listen(port,function () {
    console.log('Express server is up on port ' + port);
});
