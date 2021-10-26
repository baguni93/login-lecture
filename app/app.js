//모듈
const express = require("express"); // express 모듈 다운
const bodyParser = require("body-parser");
const app = express(); //앱이라는 변수에다가 express을 실행시켜주겠다

//라우팅 
const home = require("./src/routes/home/index")

//앱 셋팅
app.set("views", "./src/views"); //views는 ./views 파일이다.
//views 폴더 만들어주고  
app.set("view engine", "ejs"); //views 폴더 안 html 코드들을 view 엔진의 ejs로 해석해 줄 것이다.
//ejs는 굉장한 많이 사용하는 view 엔진 중 하나인데, html 이랑 비슷하다. ? 
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

//URL을 통해 전달되는 데이터에 한글 , 공백 등과 같은 문자가  포함될 경우 제대로 인식되지 않는 문제 해결 
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드. 

module.exports = app;

