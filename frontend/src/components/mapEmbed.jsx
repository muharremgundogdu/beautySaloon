import React from 'react';

const MapEmbed = () => {
    return (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <h3>İşletmemizin Konumu</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.0919612871385!2d35.501540899999995!3d38.7156976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1328242b9071%3A0xe5f3b1d4cb275d59!2sSP%20G%C3%BCzelik%20Akademisi!5e0!3m2!1str!2str!4v1734254428919!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: '0', borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sasha Diamond Güzellik Merkezi Konumu"
            ></iframe>
        </div>
    );
};

export default MapEmbed;
