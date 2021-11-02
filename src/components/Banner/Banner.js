import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Banner.css';
import Modal from '../Modal/Modal';
import { YOUTUBE_BASE_URL } from '../../api/requests';

const Banner = ({ fetchURL }) => {
    const [movie, setMovies] = useState([]);
    const [poster, setPoster] = useState('');
    const [trailer, setTrailer] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(fetchURL);
            let selMovie = response.data[Math.floor(Math.random() * (response.data.length - 1))];
            setMovies(selMovie);
            setPoster(`url(https://image.tmdb.org/t/p/original/${selMovie?.backdrop_path})`);
        }
        fetchData();
    },[fetchURL]);

    const handleClick = async (movie) => {
        let term = `${movie?.name || movie?.original_name || movie?.title} trailer`;
        let response = await axios.get(YOUTUBE_BASE_URL + `/${term}`);
        setTrailer(response.data[0]);
        setIsOpen(true);
    }


    return (
        <header className='banner' style={{ backgroundSize:'contain', backgroundImage:`${poster}`, backgroundPosition: 'center center'}}>
            <div className='banner__contents'>
                <h1>{ movie?.name || movie?.original_name || movie?.title }</h1>
                <div className='banner__buttons'>
                    <button className='banner__button' onClick={() => handleClick(movie)}>Play Trailer</button>
                    <Modal open={isOpen} video={trailer} onClose={() => setIsOpen(false)} />
                </div>
                <div className='banner__description'>{movie.overview}</div>
            </div>            
        </header>
    );
};

export default Banner;
