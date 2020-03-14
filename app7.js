var express = require('express');
var http = require('http');
var static = require('serve-static')
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public',static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    console.log('첫번째 미들웨어 호출됨.')

    var userAgent = req.header('User-Agent')
    var paramId =req.query.id || req.body.id;

    res.send('<h3>서버에서 응답. : ' + userAgent +'</h3><h3>paramName ' +paramId + '</h3>')
})

 


var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('express server : %d',app.get('port'))
});