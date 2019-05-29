var express = require('express');
var app = express();

var port = process.env.PORT || 8080

app.use(Express.static(_dirname));

app.get("/", function(req, res){
	res.sender("opening");
})

app.listen(port, function(){
	console.log("app running");
})