const {db} = require("../db/connect");

const addArtist = (req, res) => {
    let {name: name, dob: dob, bio: bio} = req.body;
    let sql = `INSERT INTO artist(name, dob, bio, id) VALUES ('${name}', '${dob}', '${bio}', '')`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("Artist Added Successfully...");
    });
};

const getArtistList = (req, res) => {
    let sql = `select name, id from artist`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("Artist list Successfully fetched...");
    });
};

module.exports = {db, addArtist, getArtistList};
