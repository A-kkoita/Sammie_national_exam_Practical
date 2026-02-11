const mysql=require("mysql2");

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"epms"
});

db.connect(err=>{
    if(err){
        console.error("Database connection Failed:",err); 
    }else{
        console.log("Connected successfully to MariaDB")
    }
})
module.exports =db;