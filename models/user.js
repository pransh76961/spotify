const {db} = require("../db/connect");

const signup = (req, res) => {
    let data = {email: req.body.email, password: req.body.password, phone: req.body.mobile};
    let sql = "insert into users set ?";
    let query = db.query(sql, data, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("Data inserted successfully");
    });
};

const login = (req, res) => {
    let data = {email: req.body.email, password: req.body.password};
    let sql = `select password from users where email='${data.email}'`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;

        console.log(result);

        if(result.length == 0) {
            res.send("check your email id...");
            return;
        }
        if(data.password === result[0].password) {
            res.send("You are logged in..")
            return;
        } else {
            res.send("Invalid password...");
            return;
        }
    });
};

module.exports = {db, signup, login};
