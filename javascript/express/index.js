var express = require("express");
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set("view engine", "ejs");
app.set("views", "./views");
app.get("/trangchu", function(req, res){
    res.render("trangchu");
});

app.get("/hello", function(req, res){
    res.send("Hello Page!");
});

app.post("/hello", urlencodedParser, function(req, res){
    var user = req.body.username;
    var pass = req.body.password;
    res.send("Username: " + user + " " + "Password: " + pass);
});

app.get("/student/:id", function(req, res){
    //var id = req.params.id;
    res.send("ID: " + req.params.id);
});
app.listen(8000);