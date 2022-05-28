const path = require("path");
// const {mysql, db} = require("../db/connect");
const {db, signup, login} = require("../models/user");

const signupPage = (req, res) => {
    res.sendFile(path.resolve(__dirname, "../view/signup/signup.html"));
};

const loginPage = (req, res) => {
    res.sendFile(path.resolve(__dirname, "../view/login/login.html"));
};

module.exports = {signupPage, signup, loginPage, login};
