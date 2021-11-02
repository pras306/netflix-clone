export const TMDB_BASE_URL =  process.env.NODE_ENV === "production" ? "https://backend-portfolio-proxy.herokuapp.com/api/v1/movies" : "http://localhost:5000/api/v1/movies";

export const YOUTUBE_BASE_URL = process.env.NODE_ENV === "production" ? "https://backend-portfolio-proxy.herokuapp.com/api/v1/videos/search" : "http://localhost:5000/api/v1/videos/search";

export const TMDB_REQUESTS = {
    fetchTrending: "/fetchTrending",
    fetchNetflixOriginals: "/fetchNetflixOriginals",
    fetchTopRated: "/fetchTopRated",
    fetchActionMovies: "/fetchActionMovies",
    fetchComedyMovies: "/fetchComedyMovies",
    fetchHorrorMovies: "/fetchHorrorMovies",
    fetchRomanceMovies: "/fetchRomanceMovies",
    fetchDocumentaries: "/fetchDocumentaries"
};

