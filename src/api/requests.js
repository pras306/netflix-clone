export const TMDB_BASE_URL =  process.env.NODE_ENV === "production" ? "https://api-proxy-server-6xbe.onrender.com/api/v1/movies" : "http://localhost:5000/api/v1/movies";

export const YOUTUBE_BASE_URL = process.env.NODE_ENV === "production" ? "https://api-proxy-server-6xbe.onrender.com/api/v1/videos/search" : "http://localhost:5000/api/v1/videos/search";

export const TMDB_REQUESTS = [
    { title: "Netflix Originals", fetchURL: "/fetchNetflixOriginals" },
    { title: "Trending", fetchURL: "/fetchTrending" },
    { title: "Top Rated", fetchURL: "/fetchTopRated" },
    { title: "Action Movies", fetchURL: "/fetchActionMovies" },
    { title: "Comedy Movies", fetchURL: "/fetchComedyMovies" },
    { title: "Horror Movies", fetchURL: "/fetchHorrorMovies" },
    { title: "Romance Movies", fetchURL: "/fetchRomanceMovies" },
    { title: "Documentaries", fetchURL: "/fetchDocumentaries" },    
]
