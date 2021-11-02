import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

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

    const onVideoSearch = async(term) => {
        let response = await axios.get(YOUTUBE_BASE_URL + `/${term}`);
        setTrailer(response.data[0]);
    }

    const handleClick = (movie) => {
        setTrailer('');
        onVideoSearch(`${movie?.name || movie?.original_name || movie?.title} trailer`);
        setIsOpen(true);
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
                    <i className='row__leftarrow' onClick={() => scroll(-500)}></i>
                </div>
                {renderMovieTiles}
                <div className='row__arrow'>
                    <i className='row__rightarrow' onClick={() => scroll(500)}></i>
                </div>
            </div>
            {trailer && <Modal video={trailer} open={isOpen} onClose={() => setIsOpen(false)} />}
        </div>
    );
}

export default Row;
