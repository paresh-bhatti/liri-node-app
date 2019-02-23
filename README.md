LiriBot
A language Interpretation and Recognition Interface that uses command line in node to give you back data

LIRI will search Spotify for songs, Bands in Town for concerts and OMDB for movies

Before running LIRI
Clone down the repository
please use your own api keys and create your own .env file following the format in the env.example file
API Keys Required:
OMDB apikey
Spotify id and secret

Installation
Run your terminal/bash and go to the root of the liri folder
npm install

How to use LIRI
LIRI is able to take in 4 commands utilizing node.js
spotify-this-song
movie-this
concert-this
do-what-it-says

What each command does
1) example: node liri.js spotify-this-song Happier
Displays the song information. When left blank "Ace of Base" song information is displayed.

2) example: node liri.js movie-this Glass
Displays the following information

Title of the movie
Year of the movie
IMDB Rating of the movie if available
Rotten Tomatoes Rating of the movie if available
Where was the movie produced
Language of the movie
Plot of the movie
Actors in the movie

If there is no movie title inserted, the search will default to Mr. Nobody

3) example: node liri.js concert-this Drake
Displays where the band or artist is performing. 

4) example: node liri.js do-what-it-says
Takes the text from random.txt and runs the song through the spotify-this-song command. I will first write text for the random.txt file dynamically, and it will pull the information from there.

In addition to logging out your results to the terminal, it will log out all your inputs and results in a log.txt file!


Attached is the quicktime video of all the functions above working as described:

https://drive.google.com/open?id=1c-Js4CxYlmSx1NcWW0WMLP1A5E1OiyfR
