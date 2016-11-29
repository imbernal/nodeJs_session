var express = require('express');

var app = express();

var PORT = 3301;

app.get('/' , function(req, res){
	res.send("Hello world!!!");
});

app.listen(PORT, function(){
	console.log("as");
});