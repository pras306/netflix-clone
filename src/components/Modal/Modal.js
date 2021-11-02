import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const Modal = ({ video, open, onClose }) => {

    if(!open) return null;

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal__icon" onClick={onClose}>X</div>
            <div className="modal__content">
                <iframe title="player" src={videoSrc} frameBorder="0"></iframe>
            </div>
        </div>,
         document.querySelector("#modal")
    )
};

export default Modal;
