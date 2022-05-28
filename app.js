const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");

require("dotenv").config();
const user = require("./routes/user");
const artist = require("./routes/artist");

// const {db1, createDb} = require("./db/initializeDb");
const {db, userTable} = require("./db/connect");



// middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


// routes
// app.get("/createdb", createDb);
// app.get("/createUserTable", userTable);
app.use('/app', user);
app.use('/app', artist);

const port = process.env.PORT || 8080;

const start = async () => {
    try {
        await db.connect((err) => {
            if(err) {
                throw err;
            }
            console.log("Mysql connected....");
        });
        app.listen(port, console.log(`Server is running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start()
