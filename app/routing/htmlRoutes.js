// created whole server path

var path = require("path")

function htmlRoutes(app){
// create homepage

app.get("/",function(req,res){
res.sendFile(path.join(__dirname,"../public/home.html"))
})
}

// export html routes function to server 

module.exports = htmlRoutes
