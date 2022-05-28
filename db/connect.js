const mysql = require("mysql2");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "spotify"
});

const userTable = (req, res) => {
    let sql = 'CREATE TABLE users(email VARCHAR(50), password VARCHAR(30), phone VARCHAR(10), PRIMARY KEY(email));';
    db.query(sql, (err, result)=> {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send("User Table created");
    });
};

const artistTable = (req, res) => {
    let sql = 'CREATE TABLE artists( name VARCHAR(20), dob Date(), bio VARCHAR(255) );';
    db.query(sql, (err, result)=> {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send("artists Table created");
    });
};

const songsTable = (req, res) => {
    let sql = 'CREATE TABLE songs( name VARCHAR(30), rlsdate Date(), cvrimg VARCHAR(100) );';
    db.query(sql, (err, result)=> {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send("songs Table created");
    });
};


module.exports = {db, userTable, artistTable, songsTable};
