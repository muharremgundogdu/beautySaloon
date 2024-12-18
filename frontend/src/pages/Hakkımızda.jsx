import React from 'react';
import { FaUserTie, FaLightbulb, FaGlobe } from 'react-icons/fa'; 
import Meb1 from '../images/Meb1.png'; 
import "../css/Hakkımızda.css"
import "../css/Navbar.css"
const Hakkımızda = () => {
  return (
    <div className="hakkimizda-container">
      <div className="hakkimizda-content">
        <div className="leftSide">
          <img src={Meb1} alt="Meb1" className="hakkımızda-image" />
        </div>
        <div className="rightSide">
        <div className="header">
          <h1 className="header-title"> ~MEB Onaylı Sertifikalı Eğitimler~</h1>
        </div>
          <section className="section">
            <h2><FaUserTie className="section-icon" /> Biz Kimiz?</h2>
            <p>
              S&P Akademi Eğitim Kurumu,kurulduğu günden beri güzellik sektörüne donanımlı uzmanlar yetiştiren bir eğitim kurumudur.
              Güzellik sektörüne adım atmak isteyen adaylara nitelikli eğitimler sunulmaktadır.
              Kurumda MEB onaylı eğitimlerin yanında sertifika ve master class eğitimleri de verilmektedir.
              Milli Eğitim Bakanlığı'ndan onaylı eğitim programlarımızın sonunda alacağınız sertifika ile sektörde bir adım öne çıkabilir, 
              kariyerinize sağlam bir başlangıç yapabilirsiniz.
            </p>
          </section>
  
          <section className="section">
            <h2><FaLightbulb className="section-icon" /> Misyonumuz</h2>
            <p>
              Verilen eğitimlerimizin amacı, güzellik sektörünü meslek olarak seçen, bu alanda kariyer yapmak isteyen ya da sektöre ilgi duyan 
              adaylara rehberlik etmek, profesyonel eğitimler sunmak ve öğrencilerimizin kişisel ve mesleki gelişimlerini desteklemektir.
            </p>
          </section>

          <section className="section">
            <h2><FaGlobe className="section-icon" /> Vizyonumuz</h2>
            <p>
              S&P Akademi Eğitim Kurumu olarak, güzellik sektörüne ilgi duyan ve bu alanda kariyer yapmak isteyen adaylara,nasıl ilerlemeleri
              gerektiğini gösteriyoruz. Eğer güzellik alanında bir kariyer inşa etmek istiyorsanız, sunduğumuz profesyonel eğitimlerle siz de 
              kariyerinizde yeni bir sayfa açın.
              
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hakkımızda;


