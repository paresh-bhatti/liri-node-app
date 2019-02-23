require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var axios = require("axios");
var moment = require('moment');
moment().format(); 
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var liri = process.argv[2];
var userInput = process.argv.slice(3).join(" ");
 var song = process.argv[3];
 var movie = process.argv[3];
 var artist = process.argv[3];

function liriDo(liri, userInput) {

switch (liri) {
    case "spotify-this-song":
    SpotifyThisSong(userInput);
    break;

    case "movie-this":
    whatMovie(userInput);
    break;

    case "do-what-it-says":
    doWhatItSays(userInput);
    break;

    case "concert-this":
    concertThis(userInput);
    break;


default: console.log("\n" + "type any of these commands after 'node liri.js': " + "\n" + 
                    " * spotify-this-song 'song name here' " + "\n" +
                    " * movie-this 'movie name here' " + "\n" +
                    " * do-what-it-says " + "\n" +
                    " * concert-this 'artist/band name here' " + "\n");

}
};


function SpotifyThisSong(song) {
//console.log("Spotify Key: " + spotify);
    
    if (!song) {
        song = "The Sign, Ace of Base";
    } else{
        song = song
    }
    
    spotify.search({
        type: 'track',
        query: song

    },

    function (err, data) {
        if (err) {
            return console.log("error: " + err);
        
        }

        console.log("============================================================");
        console.log("Artist: " + data.tracks.items[0].album.artists[0].name + "\n");
        console.log("Song: " + data.tracks.items[0].name + "\n");
        console.log("Preview URL: " + data.tracks.items[0].href + "\n");
        console.log("Album: " + data.tracks.items[0].album.name + "\n");
        console.log("============================================================");
        
        // TO APPEND SONG INFO. TO THE "log.txt" FILE...
var logSpotify = "======Begin Spotify Log Entry======" + "\nArtist: " + data.tracks.items[0].album.artists[0].name + "======End of Entry======";

fs.appendFile("log.txt", logSpotify, function (err) {
    if (err) throw err;    
    });
});
};
// this is if we wanted 5 tracks...        
// var trackInfo = data.tracks.items;
            // for (var i = 0; i < 5; i++) {
            //     if (trackInfo[i] != undefined) {
            //         var spotifyResults = 
            //         "Artist: " + trackInfo[i].artists[0].name + "\n" + 
            //         "Song: " + trackInfo[i].name + "\n" +
            //         "Preview URL: " + trackInfo[i].preview_url + "\n" +
            //         "Album: " + trackInfo[i].album.name + "\n"

            //         console.log(spotifyResults);
            //         console.log(' ');
             
        






function whatMovie() {

    if (!movie) {
        movie = "Mr. Nobody";
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=4b131f0e";

    axios.request(queryUrl).then(

     function (response) {

       //console.log(response.data);

        console.log("==================================================================");
            
        console.log("Title: " + response.data.Title + "\n"); 
        console.log("Year: " + response.data.Year + "\n");
        console.log("IMDB Rating: " + response.data.Ratings[0].Value + "\n");
        console.log("Rotten Tomato Rating: " + response.data.Ratings[1].Value + "\n");
        console.log("Origin Country: " + response.data.Country + "\n");
        console.log("Language: " + response.data.Language + "\n");
        console.log("Plot: " + response.data.Plot + "\n");
        console.log("Actors: " + response.data.Actors + "\n"); 

        console.log("==================================================================");

            //console.log(queryUrlResults);

                    // TO APPEND MOVIE INFO. TO THE "log.txt" FILE...
var logMovie = "======Begin Movie Log Entry======" + "\nMovie title: " + response.data.Title + "\nYear released: " + response.data.Year + "======End of Entry======";

fs.appendFile("log.txt", logMovie, function (err) {
    if (err) throw err;    
    });
     })}
    
        //  else if (" ") {
        //     console.log("If you haven't watched "Mr. Nobody", then you should: http://www.imdb.com/title/tt0485947/ - it's on Netflix!");
        //     return;
         
        
    



function concertThis() {

    
    var bandQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(bandQueryUrl).then(
        function (response) {
            console.log("=================================================================================");
            //console.log(response);

            console.log("Name of the venue: " + response.data[0].venue.name + "\r\n");
            console.log("Venue location: " + response.data[0].venue.city + "\r\n");
            console.log("Date of event: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\r\n");

            console.log("=================================================================================");

                    // TO APPEND CONCERT INFO. TO THE "log.txt" FILE...
                    var logConcert = "======Begin Concert Log Entry======" + "\nName of Artist: " + artist + "\nVenue: " + response.data[0].venue.name + "\nEvent Date: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "======End of Entry======";

                    fs.appendFile("log.txt", logConcert, function (err) {
                        if (err) throw err;    
                        });

        });
    };
  

function doWhatItSays () {

fs.writeFile("random.txt", "spotify-this-song, 'I want It That Way'", function(error) {
    if (error) {
        return console.log(error);
    }
        console.log("random.txt was updated!");
});

fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
        return console.log(error);
    }

    console.log(data);
      var dataArr = data.split(",");
     console.log(dataArr);

     liriDo(dataArr[0], dataArr[1]);
})
};

liriDo(liri, userInput);