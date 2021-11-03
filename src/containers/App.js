import React from 'react';
import LazyLoad from 'react-lazyload';

import './App.css';
import { TMDB_BASE_URL, TMDB_REQUESTS} from '../api/requests';
import Banner from '../components/Banner/Banner';
import Row from '../components/Row/Row';

const App = () => {

  const renderRows = () => {
    return TMDB_REQUESTS.map((request, id) => {
      if(request.title.includes("Netflix Originals")) {
        return (
          <LazyLoad height={500} key={id}>
            <Row title={request.title} fetchURL={TMDB_BASE_URL + request.fetchURL} isLargeRow />
          </LazyLoad>
        );
      } else {
        return (
          <LazyLoad height={500} offset={[-100, 0]} key={id}>
            <Row title={request.title} fetchURL={TMDB_BASE_URL + request.fetchURL} />
          </LazyLoad>
        );
      }
    });
  };

  return (
    <div className="app">
      <Banner fetchURL={TMDB_BASE_URL + "/fetchNetflixOriginals"} />
      {renderRows()}
    </div>
  );
};

export default App;
