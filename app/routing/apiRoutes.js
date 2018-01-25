var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {
    
    var userAnswers = req.body.scores;
    var closestMatch;
    var smallestDifference = 100;
    
    for (var i = 0; i < friends.length; i++) {
    	var score = 0;
    	for (var j = 0; j < friends[i].scores.length; j++) {
    		score += Math.abs(friends[i].scores[j] - userAnswers[j]);
    	} 

    	if (score < smallestDifference) {
    			smallestDifference = score;
    			closestMatch = friends[i];
    		}

    }
    res.json(closestMatch);

  });
};