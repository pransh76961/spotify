const {config, mysql, query} = require("../db/connect");
const path = require("path");


const addSong = async (req, res) => {
    console.log(req.body);
    let {name: name, rls_date: rls_date, artists_list: artists_list} = req.body;
    const file = req.file;

    let artists = "";
    for(let i=0; i<artists_list.length; i++) {
        let s = artists_list[i];
        if(s.length == 0){
            continue;
        }
        artists += artists_list[i] + ", ";
    }
    const filename = file.fieldname + '-' + file.originalname.replace(" ", "_");
    var imgsrc = 'http://localhost:8080/app/upload/' + filename;
    let sql = `INSERT INTO song(name, rls_date, cover_img, artists, id) VALUES ('${name}', '${rls_date}', '${imgsrc}', '${artists}', '')`;
    const rows = await query(sql);
    var id = rows.insertId;
    res.send("Song Added Successfully...");
};

module.exports = {addSong};
