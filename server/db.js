const mysql = require('mysql');
const db = mysql.createConnection({
    user: 'root',
    password: 'password',
    host: 'localhost',
    database:'blockchaindb' ,
    
});
db.connect((err)=>{
    if(err)
    console.log(err.message);
});

module.exports= db;

