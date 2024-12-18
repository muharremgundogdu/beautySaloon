import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp} from 'react-icons/fa'; 
import Image3 from '../images/Image3.jpg'; 
import "../css/İletişim.css"
import "../css/Navbar.css"

const İletisim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="iletisim">
      <div className="iletisim-container">
        <div className="leftSide">
          <img src={Image3} alt="İletişim" className="contact-image" />
        </div>

        <div className="rightSide">
          <div className="contact-box">
            <h2>İletişim Bilgileri</h2>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <span className="contact-text">+90 532 381 88 06</span>
              </div>
              <div className="contact-item">
                <FaWhatsapp className="contact-icon" />
                <span className="contact-text">+90 532 381 88 06</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-text">Mustafa Kemal Paşa Blv.22B 38140 Melikgazi Kayseri Türkiye</span>
              </div>
            </div>
          </div>

          <div className="social-media">
            <p>Social media'da bizi takip edin:</p>
            <a href="https://www.instagram.com/sp.guzellikakademisi?igsh=MXg3dXUzanVxbGlnbg==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default İletisim;






