const mysql = require('mysql2')
const connectionObj = require('../config/dbconfig')
let UserModel={}

UserModel.getAll = () =>{
    //connection code
    return UserModel
}
UserModel.saveNewUser = (userData) =>{
    return new Promise((resolve, reject) => {
        //connection code
    const connection = mysql.createConnection(connectionObj)
    console.log(connectionObj)
    //insert data
    const queryStr=`INSERT INTO project_db1.user(first_name, last_name, email, phone_number, password, status, created_at) VALUES ('${userData.firstName}', '${userData.lastName}', '${userData.email}', '${userData.phone}', '${userData.password}', '1', '1');`;
    connection.query(queryStr, 
        function(err, results, fields){
        if(err){reject(err)}
        else{resolve(results)}
        //      console.log(`Error: ${err}`)
        //      console.log(`Results:${result}`)
        //      console.log(`Fields:${fields}`)
    });
    }); 
}
UserModel.getUserByEmaiID = (userData)=>{
    return new Promise((resolve,reject)=>{
        //create a db connection
        //query db with user email
        const connection = mysql.createConnection(connectionObj)
        const queryStr= `SELECT * FROM project_db1.user where email ='${userData.email}'`;
        console.log(queryStr)
        connection.query(queryStr, function(err, result, fields){
            if(err){reject(err)}
            else{resolve(result)}
    })
    })}
module.exports = UserModel