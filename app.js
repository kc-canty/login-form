const express = require ('express');
const bodyParser = require('body-parser');
const mustache = require ('mustache-express');
const userData = require ('./data.js');
const session = require('express-session');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

//set up engine view
app.engine('mustache',mustache());
app.set('view engine','mustache');
app.set('login','/.login');

app.get('./admin',function(req,res){
	//validation code to see if user is admin

	res.render('index');

});

function verification(req, username, password){
	var verifyUser = userData.users.find(function (user){
	  if (username === user.username && password === user.password) {
		req.session.verified = true;
		console.log('Username and password credentials approved.');
	} else {
		return false
	}
});
console.log(req.session);
return req.session;
}

app.get('/', function (req,res){
	res.render('index');
});

app.get('/login',function(req,res){
	res.render('index')
});

app.post('/',function(req,res){
	console.log(req.body);
	var username = req.body.username;
	var password = req.body.password;
	verification(req, username, password);
		if (req.session && req.session.verified){
			res.send(username + ' thanks for logging on.');
		} else {
			res.redirect('/login');
		}
	});


app.listen(3000, function (){
	console.log('App is now running on port 3000!')
});