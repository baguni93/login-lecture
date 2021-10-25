"use strict";
const app = require("../app");
const PORT = 3000;

//listen이라는 명령어로 서버를 띄울수 있다 , 3000번 
app.listen(PORT, () =>{
    console.log("서버 가동");
});