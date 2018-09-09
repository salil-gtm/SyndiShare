var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var multer = require("multer");
var path = require('path')
var port = process.env.PORT || 8000;
var ejs = require('ejs');
var request = require('request');

var saddress = 'http://35.227.84.127:5000';
var threshold = -1;

app.set("view engine", 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, "data" + path.extname(file.originalname)); //Appending extension
  }
});
var upload = multer({ storage: storage });

app.get("/", function(req, res){
	res.redirect("/user");
});

app.get("/create", function(req, res){
	// res.sendFile(__dirname + "/public/create.html");
	res.render("create");
});

app.get("/user", function(req, res){
	res.sendFile(__dirname + "/public/user.html");
});

app.get("/results", function(req, res){
	console.log({
			names,
			vals,
			thresh
		});
	res.render("results",{
			names,
			vals,
			thresh,
			unames
		});
});


app.post('/trainModel', upload.single('inpData'), function(req, res){
	console.log(req.file);
	
	var addr = saddress + '/predict';
	console.log(addr);
	request(addr, function(error, response, body){
		console.log(response);
		vals.push(parseInt(body));
		res.render("userSucc");
	});
	res.render("userSucc");
});

app.post('/putModel', upload.array(), function(req, res){
	console.log(req.body);
	threshold = req.body.thresh;

	names.push(req.body.mname);
	thresh.push(req.body.thresh);
	unames.push(req.body.for);

	console.log(threshold);
	var addr = saddress + '/threshold';
	console.log(addr);
	request(addr, function(error, response, body){
		res.render('createSucc',{data: body});
	});
});

app.listen(port, function(){
	console.log("On port 8000");
});


var names = [];
var vals = [];
var thresh = [];
var unames = [];