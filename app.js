var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sportsInfo", { useNewUrlParser: true, useUnifiedTopology: true });

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

//Schema setup
var Player = mongoose.model('Player', new mongoose.Schema({ name: String, bgimage: String, image: String, description: String }), 'players');
var Team = mongoose.model('Team', new mongoose.Schema({ name: String, image: String, description: String, players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] }), 'teams');
var Sport = mongoose.model('Sport', new mongoose.Schema({ name: String, images: Array, description: String, teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }] }), 'sports');


app.get("/", function (req, res) {

    Sport.find({}, function (err, sports) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("home", { sports: sports });
        }
    });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/sport/:sportid", function (req, res) {
    Sport.findById(req.params.sportid).populate('teams').exec(function (err, sport) {
        if (err) {
            console.log(err);
        }
        else {
            // console.log(sport);
            res.render("sport", { sport: sport });
        }
    });
});

app.get("/team/:teamid", function (req, res) {
    Team.findById(req.params.teamid).populate('players').exec(function (err, team) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("team", { team: team });
        }
    });
});

app.get("/player/:playerid", function (req, res) {
    Player.findById(req.params.playerid, function (err, player) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("player", { player: player });
        }
    });
});

app.listen(3000, process.env.IP, function () {
    console.log("Server has started!!!");
});