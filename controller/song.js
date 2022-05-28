const path = require("path");
const {db, addSong} = require("../models/song");

const addSongPage = (req, res) => {
    res.sendFile(path.resolve(__dirname, "../view/add_song.html"));
};




module.exports = {addSongPage, addSong};
