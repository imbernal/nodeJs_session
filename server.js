var express = require('express');

var app = express();

var PORT = 3301;

app.get('/' , function(req, res){
	res.send("Hello world!!!");
});

app.get('/hello/:name' , function(req,res){
	res.send("Hello " + req.params.name);
})

app.listen(PORT, function(){
	console.log("as");
});