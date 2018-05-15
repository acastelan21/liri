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












