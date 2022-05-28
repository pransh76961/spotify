const express = require("express");
const router = express.Router();

const {addSongPage, addSong} = require("../controller/song");

router.route('/add_song').get(addSongPage).post(addSong);

module.exports = router;
