"use strict";

class UserStorage{
    static #users = {
    id: ["park", "개발", "박팀장"],
    psword: ["123", "1234", "123456"],
    name: ["우리밋", "나개발", "박우진"],
    };

    static getUsers(...fields){
       const users = this.#users;
       const newUsers = fields.reduce((newUsers, field)=>{
           if(users.hasOwnProperty(field)){
               newUsers[field] = users[field];
           }
           return newUsers;
       }, {});
        return newUsers;
    }
}

module.exports = UserStorage;