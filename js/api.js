const fetchMovies = async () => {
  // promise
  // await: đợi tới khi cái promise trả về kết quả
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/tv?api_key=a10ee5569194b352bcca20840b7f8a32&with_networks=213"
  );
  const movies = response.data.results;
  console.log(movies);

  // movies -> items
  const items = movies.map((movie) => {
    return `
    <div class="item">
      <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="" />
    </div>`;
  });

  console.log(items.join(""));

  const singleCarousel = document.getElementById("single-carousel");
  singleCarousel.innerHTML = items.join("");

  $(".single-carousel").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
};

fetchMovies();
