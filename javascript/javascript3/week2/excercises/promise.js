
//get array of movies
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(response => response.json())
.then(movies => {
console.log(movies);
getBadMovies(movies);
});

//Array of bad movies
function getBadMovies(movies){
    let badMovies = movies.filter((movie) => {
        return movie.rating < 4;
    })
    console.log("bad movies are :")
    console.log(badMovies);
    getBadMoviesSince2000(badMovies);
}

// Array of Bad movies since year 2000
function getBadMoviesSince2000(badMovies){
    let badMoviesSince2000 = badMovies.filter((badMovie) => {
        return badMovie.year >= 2000;
    })
    console.log("Bad movies since 2000 are :");
    console.log(badMoviesSince2000);
    titlesOfBadMoviesSince2000(badMoviesSince2000);
}

//Array of titles of bad movies since 2000
function titlesOfBadMoviesSince2000(badMoviesSince2000)
{
    let badMovieTitle = badMoviesSince2000.map((badMovieSince2000) => {
        return badMovieSince2000.title;
    })
    console.log("Bad movies titles since 2000");
    console.log(badMovieTitle);
}
