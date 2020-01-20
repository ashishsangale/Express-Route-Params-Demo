var express = require("express");
var app = express();
//var https = require("https");


//Routes
// visting "/" should print "hiii"
app.get("/", function(req, res){
    res.send("hiii");
});


// visiting "/speak/animal" should print "animal says sound(animal)"
app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig:"oink",
        cow:"mo",
        dog:"woof",
        goldfish:"...."

    }
    var animal = req.params.animal.toLowerCase;
    var sound = sounds[animal];
    
    res.send(" the "+ animal +" says "+ sound);
});


//visiting "repeat/message/times" should print the message n times
app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = ""

    for(var i=0;i < times;i++){
        result += message + " "
    }

    res.send(result);
});


//visiting wrong link other than specified should print error message
app.get("*", function(req, res){
    res.send("Page not found!");
});




app.listen(3000, function(){
    console.log("started");
});