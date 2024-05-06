const options = { method: "GET", headers: { accept: "application/json" } };

const loading = document.querySelector(".loader");

const getAllMovies = async () => {
  try {
    loading.innerHTML = "Loading....";
    const response = await fetch("https://api.themoviedb.org/3/authentication");
    console.log(response);
    const data = await response.json();
    loading.innerHTML = "";
    console.log(data);
    createMovie(data);
  } catch (error) {
    console.log(error);
  }
};

getAllMovies();

const createMovie = (movies) => {
  console.log(movies);
  movies.map((movie) => {
    // Create a movie card
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    document.querySelector(".movies-container").appendChild(movieCard);

    const movieCont = `<div class="cont"> 
        <img src=${movie.poster} /> 
        <p class="title">movie title: ${movie.title}</P>
        <p class="year">year: ${movie.year}</p>
        <p class="genre">genre: ${movie.genre}</p>
        <p class"director">director: ${movie.director}</p>
        <p class="actors">actors: ${movie.actors}</p>
        <p class="runtime">Duration: ${movie.runtime}mins</p>
        <p class="country">Country: ${movie.country}</p>
        <p class="language">Language: ${movie.language}</p>
        <P class="desc">Description: ${movie.plot.slice(0, 35)}...</p>
        <p class="rating">Ratings: ${movie.rating}</p>
        </div>
        `;
    movieCard.innerHTML = movieCont;
  });
};
