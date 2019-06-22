const allMovies = getAllMovies();
// {
//   title: "'71",
//   year: 2014,
//   rating: 7.2,
//   votes: 41702,
//   running_times: 5940
// }
console.log(allMovies);

const shortTitle=document.querySelector(".shorterTitleLength");
console.log(shortTitle);

//shortest title movie 
const shortestWord=allMovies.
filter(movie => movie.title.length === 1);
console.log(shortestWord);


//movie with longest title 
const longestWord=allMovies.filter(longTitle => longTitle.title.length > 80);
console.log(longestWord);

//number of movies made between 1980-1989
const noOfMoviesInEigties=allMovies
.filter(years => years.year > 1979 && years.year < 1990);
console.log("Numbers of movies made between 1980 and 1989 are " + noOfMoviesInEigties.length); 
     
/*Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)*/    
//filtered the rating greater than and equal to 7 ,assign tag as good
let ratingWithGoodTag = allMovies.filter(movie => {
    return (movie.rating >= 7);
});
ratingWithGoodTag.forEach(movie => movie.tag = "Good");//create tag key and assigns value
console.log(ratingWithGoodTag);
//filtered the rating greater than and equal to 4 and less than 7 ,assign tag as average
let ratingWithAverageTag = allMovies.filter(movie => {
    return (movie.rating >= 4 && movie.rating < 7);
});
ratingWithAverageTag.forEach(movie => movie.tag = "Average");
console.log(ratingWithAverageTag);
//filtered the rating less than 4  ,assign tag as Bad
let ratingWithBadTag = allMovies.filter(movie => {
    return (movie.rating < 4);
})

ratingWithBadTag.forEach(movie => movie.tag = "Bad");
console.log(ratingWithBadTag);
//first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
    const ratingHigherThanSix=allMovies
    .filter(higherThanSixRating => higherThanSixRating.rating > 6)
    .map(ratingOnlyArray => ratingOnlyArray.rating);
    console.log("rating higher than six " +ratingHigherThanSix);

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
const commonTitleStrings = allMovies.filter(movie => {
    let convertToLowerCase = movie.title.toLowerCase();
    return convertToLowerCase.includes('surfer') || convertToLowerCase.includes('alien') || convertToLowerCase.includes('benjamin');
}).length;
console.log("Total number of movies containing surfer, alien and benjamin are : " + commonTitleStrings);

/*Create an array of movies where a word in the title is duplicated.
 Fx "Star Wars: The Clone Wars" the word Wars is duplicated.*/
 let duplicateWordInTitle = allMovies.filter( movie =>  {
    let arrayFromTitle = movie.title.split(' '); //create an array with each word from title as an element of the array
    for (let currentIndex = 0; currentIndex< arrayFromTitle.length - 1; currentIndex++) { //Loop through all word except the last one
        currentWord = arrayFromTitle[currentIndex].toLowerCase();  // Convert the word to lower case to make comparision case-insensitive 
        for (let nextIndexToCurrent = currentIndex + 1; nextIndexToCurrent < arrayFromTitle.length; nextIndexToCurrent++) { // Loop thorugh words ahead
            nextWordToCurrent = arrayFromTitle[nextIndexToCurrent].toLowerCase();
            if (currentWord === nextWordToCurrent) { // If word matches then its duplicated
                return true; // Return true to filter method if word is duplicated and exit this function 
            } 
        }
    }
    return false; // If true was not returned yet, then no word is duplicated
                  // return false to filter method and exit
});
const arrayDuplWords=duplicateWordInTitle.map(dupl => dupl.title);//create a title array where a word is duplicated
console.log("duplicated array " + arrayDuplWords);       
