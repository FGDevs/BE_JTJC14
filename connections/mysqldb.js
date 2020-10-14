const mysql = require('mysql');

const db=mysql.createConnection({
    host       : process.env.DB_HOST,
    user       : process.env.DB_USER,
    password   : process.env.DB_PASS,
    database   : process.env.DB_DB,
    port       : 3306
});

// const db=mysql.createConnection({
//     host       : 'db4free.net',
//     user       : 'fgdevs',
//     password   : 'gamedeV06-',
//     database   : 'monggo',
//     port       : 3306
// });

db.connect((error)=>{
    error? console.log('error db') : console.log('success');
});

module.exports = db;