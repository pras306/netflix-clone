import React from 'react';
import LazyLoad from 'react-lazyload';

import './App.css';
import { TMDB_BASE_URL, TMDB_REQUESTS} from '../api/requests';
import Banner from '../components/Banner/Banner';
import Row from '../components/Row/Row';

const App = () => {
  return (
    <div className="app">
      <Banner fetchURL={TMDB_BASE_URL + TMDB_REQUESTS.fetchNetflixOriginals} />
      <LazyLoad height={500}>
        <Row title={'Netflix Originals'} fetchURL={TMDB_BASE_URL + TMDB_REQUESTS.fetchNetflixOriginals} isLargeRow />
      </LazyLoad>
      <LazyLoad height={500} offset={[-100, 0]}>
        <Row title={'Trending'} fetchURL={TMDB_BASE_URL + TMDB_REQUESTS.fetchTrending} />
      </LazyLoad>
      <LazyLoad height={500} offset={[-100, 0]}>
        <Row title={'Top Rated'} fetchURL={TMDB_BASE_URL + TMDB_REQUESTS.fetchTopRated} />
      </LazyLoad>
      <LazyLoad height={500} offset={[-100, 0]}>
        <Row title={'Action Movies'} fetchURL={TMDB_BASE_URL + TMDB_REQUESTS.fetchActionMovies} />
      </LazyLoad>
      <LazyLoad height={500} offset={[-100, 0]}>
        <Row title={'Comedy Movies'} fetchURL={TMDB_BASE_URL + TMDB_REQUESTS.fetchComedyMovies} />
      </LazyLoad>
      <LazyLoad height={500} offset={[-100, 0]}>
        <Row title={'Horror Movies'} fetchURL={TMDB_BASE_URL + TMDB_REQUESTS.fetchHorrorMovies} />
      </LazyLoad>
      <LazyLoad height={500} offset={[-100, 0]}>
        <Row title={'Romance Movies'} fetchURL={TMDB_BASE_URL + TMDB_REQUESTS.fetchRomanceMovies} />
      </LazyLoad>
      <LazyLoad height={500} offset={[-100, 0]}>
        <Row title={'Documentaries'} fetchURL={TMDB_BASE_URL + TMDB_REQUESTS.fetchDocumentaries} />
      </LazyLoad>
    </div>
  );
};

export default App;
