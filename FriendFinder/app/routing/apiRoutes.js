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
      var absoluteDifference;
      var total = [];
      for (var i=0; i<oldScore.length; i++) {
          console.log(oldScore[i])
          console.log(newScore[i])
          absoluteDifference = Math.abs(newScore[i]-oldScore[i])
          console.log("abs",absoluteDifference)
          if(isNaN(absoluteDifference)){
              console.log("is not num")
          }
          else{
              console.log("it is")
          }
           total.push(absoluteDifference);
           console.log("please",total)
      }
      var tot;
           for(var i=0; i<total.length; i++){
             
       tot = tot + Number(total[i])
console.log(tot)
           }
      
   
       
    
    friendsData.push(newFriend);
    console.log("this is the list",friendsData)
   
   
   /*     var absoluteDifference;
        for (var i=0; i<friendsData[0].scores.length; i++) {
        absoluteDifference += Math.abs(friendsData[0].scores[i]-newFriend.scores[i])
        console.log("this is",friendsData[0].scores)
        if (absoluteDifference < 5) {
            console.log ("You are now friends with ", friends[i]);
        } else {
            console.log("You are unfriendable, sorry.");
        }
    }*/
   
  })
}