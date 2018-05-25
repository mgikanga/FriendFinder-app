// require the friends file with the friends data
var friendsData = require("../data/friends");
// do the ROUTING
module.exports = function (app) {

    // respond with the friends data
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    // API POST Requests
    // Below code handles when a user submits the survey data and thus submits data to the server.
    // Then the server saves the data to the friendsData array)

    app.post("/api/friends", function (req, res) {
        //assign a variable for the new user input as the new friend
        let newFriend = req.body;
        //new array to push the score from the user input after converting them into numbers
        let newScore = [];
        //variable that holds the absolute difference between friends
        let absoluteDifference = 0;
        // array for all matches possible 
        let allMatches = [];
        // assign a variable to the best match found
        let bestMatch;
        //variable for the best match name
        let matchName;
        //variable for the best match photo
        let matchPhoto;
        // loop through all the score from the user input
        for (let i = 0; i < newFriend.scores.length; i++) {
            //convert the value into number and push it into the newScore array
            newScore.push(parseFloat(newFriend.scores[i]))
        }
        //loop through the friends data to find the best match
        for (let i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i].name)
            let oldScore = friendsData[i].scores;
            //loop through the score of all friends in the friends data 
            for (let i = 0; i < oldScore.length; i++) {
                console.log(oldScore[i])
                console.log(newScore[i])
                //determine the absolute difference between each friend available and the new user input
                absoluteDifference += Math.abs((newScore[i]) - (oldScore[i]))

            }
            //push the absolute difference value to the all matches array so as to create with all the possible matches
            allMatches.push(absoluteDifference);


            console.log("matches", allMatches)
            // determine the minimum value of the matches since it is the best match for the new user
            bestMatch = (Math.min(...allMatches));
            console.log("new match", bestMatch)


            console.log("You are now friends with ", friendsData[i].name);
            // get the best match name and photo
            matchName = friendsData[i].name;
            matchPhoto = friendsData[i].photo;

        }



        friendsData.push(newFriend);
        console.log("this is the list", friendsData)
        // response with the best match info

        res.json({ status: 'OK', matchName: matchName, matchPhoto: matchPhoto });

    })
}