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

    static getUserInfor(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //[id, psword , name]
        const userInfo = userKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {}); 

        return userInfo;
    };
}

module.exports = UserStorage;