import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
// import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

import './Row.css';
import { YOUTUBE_BASE_URL } from '../../api/requests';
import Modal from '../Modal/Modal';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchURL, isLargeRow }) => {
    const [ movies, setMovies ] = useState([]);
    const [ trailer, setTrailer ] = useState(null);
    const [ isOpen, setIsOpen ] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(fetchURL);
            setMovies(response.data);
        }

        fetchData();

    }, [fetchURL]);

    const scroll = (offset) => {
        ref.current.scrollLeft += offset;
    }

    const handleClick = async (movie) => {
        setTrailer('');
        let term = `${movie?.name || movie?.original_name || movie?.title} trailer`;
        try {
            let response = await axios.get(YOUTUBE_BASE_URL + `/${term}`);
            if(response.data.length <= 0) {
                alert("Unable to fetch trailer of the movie you requested.");
                return;
            }
            setTrailer(response.data[0]);
            setIsOpen(true);
        } catch(err) {
            alert("Unable to fetch trailer of the movie you requested.");
        }
    }

    const renderMovieTiles = movies ? movies.map((movie) => {
        return <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${base_url}${ isLargeRow ? movie?.poster_path : movie?.backdrop_path ? movie.backdrop_path : movie.poster_path}`} 
                    alt={movie?.name || movie?.original_name || movie?.title} onClick={() => handleClick(movie)}/> 
    }) : null;

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className='row__posters' ref={ref}>
                <div className='row__arrow'>
                    <i className='row__leftarrow' onClick={() => scroll(-1000)}></i>
                </div>
                {renderMovieTiles}
                <div className='row__arrow'>
                    <i className='row__rightarrow' onClick={() => scroll(1000)}></i>
                </div>
            </div>
            {trailer &&
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <iframe title="player" src={`https://www.youtube.com/embed/${trailer.id.videoId}?autoplay=1`} frameBorder="0"></iframe>
                </Modal>
            }
        </div>
    );
}

export default Row;
