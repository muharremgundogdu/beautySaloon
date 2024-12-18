import React from 'react';
import '../css/FloatingButton.css';

const floatingButtons = () => {
    return (
        <div className="floating-buttons">
            <a href="https://www.instagram.com/sp.guzellikakademisi/" target="_blank" rel="noopener noreferrer">
                <div className="button instagram"></div>
            </a>
            <a href="tel:+90 5323818806" target="_blank" rel="noopener noreferrer">
                <div className="button whatsapp"></div>
            </a>
        </div>
    );
};

export default floatingButtons;
