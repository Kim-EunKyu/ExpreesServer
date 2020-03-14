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

    //res.send('<h1>서버에서 응답한 결과입니다. : ' + req.user + '</h1>');
    
    var person = {name : '소녀시대', age : 20}
    //res.send(person);//자바스크립트 객체를 보낼 수 있음
    var personStr = JSON.stringify(person) // json포맷으로 직접적으로 명시하여 보내는 방법, 위처럼하면 알아서 변경하여 보내는 것
    //res.send(personStr);

    res.writeHead(200, {"Content-Type" : "application/json;charset=utf8"})
    res.write(personStr);
    res.end();
})

app.set('port', process.env.PORT || 3000);

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('express server : %d',app.get('port'))
});