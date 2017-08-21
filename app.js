const express = require ('express')
const mustache = require ('mustache-express')
// const User = require ('./login/login.js')
const app = express()



//set up engine view
app.engine('mustache',mustache())
app.set('view engine','mustache')
app.set('views','/.views')

app.get('./admin',function(req,res){
	//validation code to see if user is admin

	res.render('index')

})

// app.get('/admin/user-list',function(req,res){
// 	res.redner('index')
// })

// app.get('/',function(req,res){
// 	// var user = User.find('landry')
// 		// res.send(user)
// 		res.send('Hi Keith!')
// }

app.get('/',function(req,res){
	res.render('index-mustache.html')
})


app.get('/list',function(req,res){
	res.send(User.all)
})

app.listen(3000, function (){
	console.log('Example app listening on port 3000!')
})