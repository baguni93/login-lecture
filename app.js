//모듈
const express = require("express"); // express 모듈 다운

const app = express(); //앱이라는 변수에다가 express을 실행시켜주겠다

//라우팅 
const home = require("./routes/home/index")

//앱 셋팅
app.set("views", "./views"); //views는 ./views 파일이다.
//views 폴더 만들어주고  
app.set("view engine", "ejs"); //views 폴더 안 html 코드들을 view 엔진의 ejs로 해석해 줄 것이다.
//ejs는 굉장한 많이 사용하는 view 엔진 중 하나인데, html 이랑 비슷하다. ? 


app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드. 

module.exports = app;