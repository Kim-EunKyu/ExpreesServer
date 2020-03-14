var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res, next){
    console.log('첫번째 미들웨어 호출됨.')

    req.user = 'mike'; // 객체에 user라는 정보를 저장

    next();//다음 미들웨어로 넘기는 함수
    
})

app.use('/',function(req, res, next){
    console.log('두번째 미들웨어 호출됨.')

    res.writeHead(200, {"Content-Type" : "text/html;charset=utf8"})
    res.end('<h1>서버에서 응답한 결과입니다. : ' + req.user + '</h1>');
})

app.set('port', process.env.PORT || 3000);

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('express server : %d',app.get('port'))
});