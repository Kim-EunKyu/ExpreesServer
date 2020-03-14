var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('express server : %d',app.get('port'))
});