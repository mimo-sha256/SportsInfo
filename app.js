var express = require("express"),
    app = express();

app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.get("/", function (req, res) {
    res.render("home");
});

app.listen(3000, process.env.IP, function () {
    console.log("Server has started!!!");
});