const {config, mysql, query} = require("../db/connect");

const addSong = async (req, res) => {
    // Structure which we will receive
    // {
    // name: 'f safknfc ',
    // rls_date: '1919-05-20',
    // cover_img: 'Screenshot 2022-05-24 215704.png',
    // artists_list: [ '', '1', '3' ],
    // submit: 'Submit'
    // }

    let {name: name, rls_date: rls_date, cover_img: cover_img, artists_list: artists_list} = req.body;
    let artists = "";
    for(let i=0; i<artists_list.length; i++) {
        let s = artists_list[i];
        if(s.length == 0){
            continue;
        }
        artists += artists_list[i] + ", ";
    }

    let sql = `INSERT INTO song(name, rls_date, cover_img, artists, id) VALUES ('${name}', '${rls_date}', '${cover_img}', '${artists}', '')`;
    const rows = await query(sql);
    res.send("Song Added Successfully...");
};

module.exports = {config, mysql, query, addSong};
