import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const Modal = ({ open, onClose, children }) => {

    if(!open) return null;

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal__icon" onClick={onClose}>X</div>
            <div className="modal__content">
                {children}
            </div>
        </div>,
         document.querySelector("#modal")
    )
};

export default Modal;
