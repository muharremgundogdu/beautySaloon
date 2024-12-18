import React from 'react'
import "../css/HomePage.css"
import Slideshow from '../components/Slideshow'
import Slider from '../components/Slider'
import { Link } from 'react-router'
import MapEmbed from '../components/mapEmbed'


const HomePage = () => {
  return (
    <div>
      <div>
        <Slideshow />
      </div>
      <div className='gif-container'>
        <img className='gif' src="/src/images/giff.gif" alt="" />
      </div>
      <div>
        <Slider />
      </div>
      <div className='sertifika-container'>
        <h1 className='sertifika-b'>M.E.B <br />Onaylı <br />Egitimimlerimiz</h1>
        <p className='sertifika-p'>
          Öğrencilerimize dünya yeniliklerine uygun, <br />
          sektörlerin tüm istek ve ihtiyaçlarını karşılayabilmelerini sağlayacak, <br />
          teori ve uygulamaları eksiksiz şekilde öğrenecekleri, <br />
          Milli Eğitim Bakanlığı Sertifikalı Eğitim Programları sunmaktayız. <br />
        </p>
        <Link to="/eğitimler">
          <button className='sertifika-button' >EĞİTİMLERİMİZİ İNCELE</button>
        </Link>
      </div>
      <div className='img-container'>
        <img className="img-combined" src="/src/images/combined.jpeg" alt="" />
      </div>

      <div>
        <MapEmbed></MapEmbed>
      </div>

      <footer className='footer'>
        <span className='footer-span1'>
          <h1>
            Bizimle İletişime Geçin
          </h1>
          <p>DİLEDİGİNİZ ZAMAN BİLGİ ALIN</p>
        </span>
        <span className='footer-span2'>
          <h5>SP AKADEMİ</h5>

          <Link to="iletişim">

            <button> BİZİMLE İLETİŞİME GEÇMEK İÇİN TIKLAYINIZ</button>
          </Link>
        </span>

      </footer>
    </div>
  )
}

export default HomePage
