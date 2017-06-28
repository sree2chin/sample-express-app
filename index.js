var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

//MIDDLEWARE
//Simple request time logger
app.use(function(req, res, next){
	console.log("A new request received at " + Date.now());
	//This function call is very important. It tells that more processing is 
	//required for the current request and is in the next middleware function/route handler.
	next();
});

// app.get('/', function(req, res){
// 	// console.log(req);
// 	// console.log("..................*************");
// 	// console.log(res);
//    res.send("Hello chinna!");
// });

app.get('/', function(req, res){
   res.render('form');
});

app.get('/hello', function(req, res){
   res.send('test conflicting one');
})

app.get('/first_template', function(req, res){
    res.render('first_view');
});

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
})

//Other routes here
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

app.get('/', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});

app.listen(3000);
