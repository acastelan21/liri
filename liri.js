require("dotenv").config();
var inquirer = require("inquirer");
var fs = require("fs");
var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);
var Twitter = require("twitter");
var client = new Twitter(keys.twitter);
var input = process.argv[2];
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);



var params = {
  screen_name: 'acastelan21',
  count: 20
};

if (input === "my-tweets") {
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    for (i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text)
      console.log(tweets[i].created_at);
      console.log("========================================================================================")
    }
    if (!error) {}
  });

}

if(input==="spotify-this-song"){
var songName = process.argv[3];
if (songName) {
spotify.search({ type: 'track', query: songName}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 var data= data.tracks.items[0];
console.log("Artist(s): "+ data.artists[0].name); 
console.log("Song Name: "+ data.name);
console.log("Preview Link: " + data.preview_url);
console.log("Album: "+ data.album.name);

});

}else{
  spotify.search({ type: 'track', query: "never gonna give you up"}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 var data = data.tracks.items[0];
 console.log("Artist(s): "+ data.artists[0].name); 
 console.log("Song Name: "+ data.name);
 console.log("Preview Link: " + data.preview_url);
 console.log("Album: "+ data.album.name);
 console.log("-----------------------------------")
});


}
}

var request = require("request");




if(input==="movie-this"){

  var nodeArgs = process.argv;


var movieName = "";


for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}

if (movieName){
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


request(queryUrl, function(error, response, body) {

  var movie = JSON.parse(body)
  if (!error && response.statusCode === 200) {
   
    console.log("Title: " + movie.Title);
    console.log("Release Year: " + movie.Year);
    console.log("IMBD Rating: " + movie.imdbRating);
    console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].value);
    console.log("Country Produced: " + movie.Country);
    console.log("Language: " + movie.Language);
    console.log("Plot: " + movie.Plot);
    console.log("Actors: "+ movie.Actors);
  }
});
}
else {
  var movieName = "Space Jam"
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


request(queryUrl, function(error, response, body) {

  var movie = JSON.parse(body)
  if (!error && response.statusCode === 200) {
    
    console.log("Title: " + movie.Title);
    console.log("Release Year: " + movie.Year);
    console.log("IMBD Rating: " + movie.imdbRating);
    console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
    console.log("Country Produced: " + movie.Country);
    console.log("Language: " + movie.Language);
    console.log("Plot: " + movie.Plot);
    console.log("Actors: "+ movie.Actors);
  }
});
}
}

if(input === "do-what-it-says"){
  fs.readFile("random.txt", "utf8", function(err, data){
      console.log(data);
  });

}   










