// dependencies
var express = require("express")


var app = express()
// app selector to creat all the route also create server

var PORT = process.env.PORT ||8000

// creates url path for public folder
app.use(express.static("app/public"))


// middle ware parsing the converts user data to JSON
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// importing html and api routes into the server

var apiRoutes = require("./app/routing/apiRoutes")
var htmlRoutes = require("./app/routing/htmlRoutes")

apiRoutes(app)
htmlRoutes(app)

var apioRout

// this will create server listen feature

app.listen(PORT,function(){
console.log("PORT is listening on http://localhost:"+PORT)    
})