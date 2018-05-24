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
      //assign a variable for the new user input as the new friend
      let newFriend = req.body;
      //new array to push the score from the user input after converting them into numbers
      let newScore=[];
      let absoluteDifference = 0;
      // array for all matches possible
      let allMatches= [];
      // assign a variable to the best match found
      let bestMatch;
      let matchName;
      let matchPhoto;
      for(let i=0; i<newFriend.scores.length; i++){
          //convert the value into number and push it into the newScore array
        newScore.push(parseFloat( newFriend.scores[i]))
      }
      //loop through the friends data to find the best match
      for(let i = 0; i < friendsData.length; i++){
          console.log(friendsData[i].name)
      let oldScore =friendsData[i].scores;
      console.log("new",newScore)
      console.log("old" , oldScore)
      

      
      for (let i=0; i<oldScore.length; i++) {
          console.log(oldScore[i])
          console.log(newScore[i])
          absoluteDifference += Math.abs((newScore[i])-(oldScore[i]))
         
      }
      allMatches.push(absoluteDifference);
    
      
          console.log("abs",allMatches)  
          bestMatch = (Math.min(...allMatches));
          console.log("new match", bestMatch)
      
        
            console.log ("You are now friends with ", friendsData[i].name);
            matchName = friendsData[i].name;
            matchPhoto = friendsData[i].photo;
            
    }
    
       
    
    friendsData.push(newFriend);
    console.log("this is the list",friendsData)
   
    res.json({status: 'OK', matchName: matchName, matchPhoto: matchPhoto});
   
  })
}