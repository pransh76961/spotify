const mysql = require("mysql2");
const db1 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

const createDb = (req, res) => {
    let sql = "CREATE DATABASE spotify";
    db1.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        res.send("database crated..");
    });
};

module.exports = {db1, createDb};
