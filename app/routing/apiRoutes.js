// creating the api routes for friends app data

var friends = require("../data/friends")

// "app" creates GET, POST is too add new data, PUT is to update the data, DELETE /= 4 types of requsts for client

// app.get created api for friends

// app.post adds data for friends database

function apiRoutes(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
        // users data after converting to JSON and put into req.body
        console.log(req.body)
        var totalDifference = 0
        var newFriend = req.body

        var newFriendsDB = []
        // making 4 loop to loop through the friends list array that is alist in data base 
        // maing 2nd 4 lopp for the scores array includes the math to equal best match
        for (let i = 0; i < friends.length; i++) {
            totalDifference = 0

            for (let index = 0; index < friends[i].scores.length; index++) {
                totalDifference = totalDifference + Math.abs(parseInt(newFriend.scores[index]) - friends[i].scores[index])

            }

            // Taking the old Friends array and itstead of the score it converts it into the totalDifference into number to chose best 
            //  match so lowest # will best match
                newFriendsDB.push({
                name: friends[i].name,
                photo: friends[i].photo,
                totalDifference: totalDifference
            })


        }
        friends.push(req.body)
        //  this function sorts the totalDifference in asending order for least to greateat to find best Match whicv is least amount
        newFriendsDB.sort(function(a,b){
            return a.totalDifference - b.totalDifference
        })
        console.log(newFriendsDB)

    //   returns the least total difference to get best match and returns it to client
        res.json(newFriendsDB[0])

    })
}

// module exports functions so server.js can import routes
module.exports = apiRoutes