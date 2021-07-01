const API_KEY = "api_key=308ad6c564d79bc9fd7b4d6bff6bfeb8";
const MOVIE_BASE_URL = "https://api.themoviedb.org/3";

//Top_Rated_Movie_URL
export const TOP_RATED_MOVIE_API_URL =
  MOVIE_BASE_URL +
  "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&" +
  API_KEY;
//UP_Coming_MovieURL

export const UP_COMING_MOVIE_URL =
  MOVIE_BASE_URL + "/movie/upcoming?" + API_KEY;
export const MOVIE_IMG_URL = "https://image.tmdb.org/t/p/w500";
