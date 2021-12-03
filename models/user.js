const mysql = require('mysql2')
const connectionObj = require('../config/dbconfig')
const bcrypt = require('bcrypt');
let UserModel={}

UserModel.getAll = () =>{
    //connection code
    return UserModel
}
UserModel.saveNewUser = (userParams) =>{
    return new Promise(async (resolve, reject) => {
    //hash user password
    const salt = 5
    const password_hash = await bcrypt.hash(userParams.password,salt)
    //console.log('password', userParams.password)    
    //console.log('Password hash:', password_hash)
    //connection code
    const connection = mysql.createConnection(connectionObj)
    console.log(connectionObj)
    //insert data
    const queryStr=`INSERT INTO project_db1.user(first_name, last_name, email, phone_number, password, status, created_at) VALUES ('${userParams.firstName}', '${userParams.lastName}', '${userParams.email}', '${userParams.phone}', '${password_hash}', '1', '1');`;
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