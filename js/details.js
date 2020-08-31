let poster = document.querySelector(".poster")
title = document.querySelector(".title")
description = document.querySelector(".description")
releaseDate = document.querySelector(".release_date");
console.log(releaseDate);
video = document.querySelector(".video"),
movieDetails = localStorage.getItem("Movie_Details")
jsonMovieDetails = JSON.parse(movieDetails)
id = jsonMovieDetails.movieid
url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c1fa86a36f31717fee290a266d66443e&language=en-US`;


console.log(id);

poster.setAttribute("src","https://image.tmdb.org/t/p/w500"+jsonMovieDetails.movieimage);
title.innerText=  jsonMovieDetails.moviename;
description.innerText = "Released on "+jsonMovieDetails.moviedate+". "+jsonMovieDetails.moviedescription;

fetch(url)
.then((response) => {
return response.json();
})
.then((results) => {
let youtubeLink = `https://www.youtube.com/watch?v=${results.results[0].key}`;
video.setAttribute("href",youtubeLink);
})