// created whole server path

var path = require("path")

function htmlRoutes(app){
// create homepage

app.get("/",function(req,res){
res.sendFile(path.join(__dirname,"../public/home.html"))
})

// sub page called surevy

app.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname,"../public/survey.html"))
    })

}

// export html routes function to server 

module.exports = htmlRoutes
