$(() => {
  $("#searchForm").on("submit", (e) => {
    e.preventDefault();
    let searchText = $("#searchText").val();
    getMovies(searchText);
  });
});

function getMovies(searchText) {
  axios
    .get(`http://www.omdbapi.com/?s=${searchText}&apikey=63370bf0`)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;

      // Create element to append
      let output = "";
      $.each(movies, (index, movie) => {
        output += `
          <div class='col-lg-3 mb-4 col-md-4'>
          <div class='card h-100'>
          <div class='card-body'>
          <img class='img-fluid' src='${movie.Poster}'>
          </div>
          
          <h5 class='card-header'>${movie.Title}</h5>
          
          <div class='card-footer text-end'>
          <a onclick='movieSelected("${movie.imdbID}")' class= 'btn btn-secondary' href='#'>Movie Details</a>
          </div>
          </div>
          </div>`;
      });

      // Append movies
      $("#movies").html(output);
    })
    .catch((err) => console.log(err));
}

function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "movie.html";
  return false;
}

function getMovie() {
  let movieId = sessionStorage.getItem("movieId");

  axios
    .get(`http://www.omdbapi.com/?i=${movieId}&apikey=63370bf0`)
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output = `
      <div class='row'>
      <div class='col-md-4'>
      <img src='${movie.Poster}' class='thumbnail'>
      </div>
      <div class='col-md-8'>
      <h2>${movie.Title}</h2>
      <ul class="list-group">
        <li class="list-group-item"><strong>Genre: </strong> ${movie.Genre}</li>
        <li class="list-group-item"><strong>Released: </strong> ${movie.Released}</li>
        <li class="list-group-item"><strong>Rated: </strong> ${movie.Rated}</li>
        <li class="list-group-item">
    <strong>IMDb Rating: </strong> ${movie.imdbRating}
  </li>
  <li class="list-group-item"><strong>Director: </strong> ${movie.Director}</li>
  <li class="list-group-item"><strong>Writer: </strong> ${movie.Writer}</li>
  <li class="list-group-item"><strong>Actors: </strong> ${movie.Actors}</li>
</ul>
<div class="row">
  <div class="well">
    <h3>Plot</h3>
    ${movie.Plot}
    <hr />
    <a
      href="http://imdb.com/title/${movie.imdbID}"
      target="_blank"
      class="btn btn-secondary"
    >View IMDb</a> 
    <a href="index.html" class="btn btn-light">Go Back To Search</a>
  </div>
</div>
      </div>
      </div>`;
      $("#movie").html(output);
    })
    .catch((err) => console.log(err));
}
