var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
 
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey data... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
      var newFriend = req.body;
      var newScore=[];
      var oldScore =friendsData[0].scores;
      for(var i=0; i<newFriend.scores.length; i++){
        newScore.push(parseFloat( newFriend.scores[i]))
      }
      console.log("new",newScore)
      console.log("old" , oldScore)
      var absoluteDifference = 0;
   
      for (var i=0; i<oldScore.length; i++) {
          console.log(oldScore[i])
          console.log(newScore[i])
          absoluteDifference += Math.abs((newScore[i])-(oldScore[i]))
          console.log("abs",absoluteDifference)  
          if (absoluteDifference <= 15) {
            console.log ("You are now friends with ", friendsData[0].name);
        } else {
            console.log("You are unfriendable, sorry.");
        }   
      }
     
      
   
       
    
    friendsData.push(newFriend);
    console.log("this is the list",friendsData)
   

   
  })
}