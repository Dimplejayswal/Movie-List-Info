const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=c1fa86a36f31717fee290a266d66443e";
fetch(url)
.then((response) => {
   return response.json();
})
.then((results) => {
let title = document.querySelectorAll("h1");
description = document.querySelectorAll(".container-copy__description");
containerImage = document.querySelectorAll(".container-image_img");
mainContainer = document.querySelector(".wrapper");

console.log(results.results);
for(let i=0; i<=results.results.length; i++){

    let html = `<a href="details.html" id="${i}" class="container" onClick="getData(this.id)">
  <div class="container-image">
      <img class="container-image_img" src="https://image.tmdb.org/t/p/w500${results.results[i].poster_path}"/>
  </div>
  <div class="container-copy">
    <h1 class="container-copy__heading">${results.results[i].title}</h1>
    <p class="container-copy__description">Released on ${results.results[i].release_date}. ${results.results[i].overview}</p>
  </div>      
</a>`;   
    mainContainer.innerHTML += html;
}   

});

function getData(id){
fetch(url)
.then((response) => {
   return response.json();
})
.then((results) => {
    console.log(results.results[id]);
    let movie = {
        "moviename":results.results[id].title ,
        "moviedescription":results.results[id].overview,
        "movieimage":results.results[id].poster_path,
        "movieid": results.results[id].id,
        "moviedate":results.results[id].release_date

    }

    localStorage.setItem("Movie_Details",JSON.stringify(movie));
})

} 
