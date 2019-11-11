var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tryout", { useNewUrlParser: true, useUnifiedTopology: true });

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

//Schema setup

var Images = mongoose.model('Image', new mongoose.Schema({ name: String, img: String }), 'images');

app.get("/", function (req, res) {
    var bgImage;
    var gridImages;
    Images.find({ name: "bg" }, function (err, images) {
        if (err) {
            console.log(err);
        }
        else {
            bgImage = images;
        }
    });
    Images.find({ name: "grid" }, function (err, images) {
        if (err) {
            console.log(err);
        }
        else {
            gridImages = images;
            res.render("home", { bgImage: bgImage, gridImages: gridImages });
        }
    });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/sport/:sportName", function (req, res) {
    res.render("sport");
});

app.get("/team/:teamName", function (req, res) {
    res.render("team");
});

app.get("/player/:playerName", function (req, res) {
    res.render("player");
});

app.listen(3000, process.env.IP, function () {
    console.log("Server has started!!!");
});