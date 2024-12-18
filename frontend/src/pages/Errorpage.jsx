import React from 'react';
import "../css/Errorpage.css";

const Errorpage = () => {
  return (
    <div className="container">
      <h1 className="errorCode">404</h1>
      <h2 className="errorMessage">Oops! Sayfa Bulunamadı</h2>
      <p className="description">
        Aradığınız sayfa mevcut değil ya da bir hata oluştu. Ana sayfaya dönerek yeniden başlayabilirsiniz.
      </p>
      <a href="/" className="homeButton">
        Ana Sayfaya Dön
      </a>
    </div>
  );
};

export default Errorpage;
