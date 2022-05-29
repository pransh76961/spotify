const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var cors = require('cors')

require("dotenv").config();
const user = require("./routes/user");
const artist = require("./routes/artist");
const song = require('./routes/song');

const {config, mysql} = require("./db/connect");


// middleware
app.use(cors());
app.use('/app', express.static(path.join(__dirname, "/view")));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


// routes
app.use('/app', user);
app.use('/app', artist);
app.use('/app', song);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Server is running on port ${port}`));
