import React from "react";
import { useState } from 'react';
import "../css/Kayıt.css"
import "../css/Navbar.css"

function Kayıt() {
  // State'ler
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState([]);
  const [educationSelected, setEducationSelected] = useState([]);

  // Eğitim seçimi kontrolü 
  const handleCheckboxChange = (e) => {
    const value = e.target.nextSibling.textContent; // Checkbox'ın yanındaki metni al
  
    setEducationSelected((prev) => {
      if (e.target.checked) {
        // Checkbox işaretlendiyse array'e ekle
        return [...prev, value];
      } else {
        // Checkbox kaldırıldıysa array'den çıkar
        return prev.filter((item) => item !== value);
      }
    });
  };
  

  // Formu kontrol etme fonksiyonu
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let validationErrors = [];
  
    // Form alanlarının kontrolü
    if (!name) validationErrors.push("Ad Soyad");
    if (!phone) validationErrors.push("Telefon Numarası");
    if (!dob) validationErrors.push("Doğum Tarihi");
    if (!educationSelected) validationErrors.push("Eğitim Seçimi");
  
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors([]);
  
      // Backend'e veri gönderme
      try {
        const response = await fetch("http://127.0.0.1:5000/kayit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            phone: phone,
            education: educationSelected,
            birthDate: dob,
          }),
        });
  
        const data = await response.json();
        console.log("Sunucudan Gelen Yanıt:", data);
  
        alert("Form başarıyla gönderildi!");
      } catch (error) {
        console.error("Hata oluştu:", error);
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    }
  };
  

  return (
    <div className="kayıt-container">
      <h1 className="kayıt-title">KAYIT FORMU</h1>
      <form className="kayıt-form" onSubmit={handleSubmit}>
        {/* Sol Kısım */}
        <div className="formGroup-container">
          <div className="formGroup">
            <label htmlFor="name">Ad Soyad:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Adınızı ve Soyadınızı girin"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.includes("Ad Soyad") && (
              <span className="error-message">Bu bölümü doldurunuz!</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="phone">Telefon Numarası:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Telefon numaranızı girin"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.includes("Telefon Numarası") && (
              <span className="error-message">Bu bölümü doldurunuz!</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="dob">Doğum Tarihi:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            {errors.includes("Doğum Tarihi") && (
              <span className="error-message">Bu bölümü doldurunuz!</span>
            )}
          </div>
        </div>

        {/* Sağ Kısım */}
        <div className="formGroup formGroup-education">
          <label>Hangi eğitimlerimize katılmak istersiniz?</label>
          <div className="course-options">
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} /> MEB onaylı güzellik uzmanlığı eğitimi
            </label>
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} /> MEB onaylı makyaj uygulayıcısı eğitimi
            </label>
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} /> MEB onaylı manikürist uygulayıcı eğitimi
            </label>
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} /> MEB onaylı kalıcı makyaj eğitimi
            </label>
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} /> MEB onaylı protez tırnak uzmanlığı
            </label>
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} /> MEB onaylı lazer epilasyon uygulayıcısı eğitimi
            </label>
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} /> İpek kirpik eğitimi(Özel kurum sertifikalı)
            </label>
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} /> Microblading eğitimi(Özel kurum sertifikalı)
            </label>
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} /> İpek kirpik temel eğitimi(Kurum eğitimi)
            </label>
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} /> Dövme ve kalıcı makyaj silme eğitimi(Kurum eğitimi)
            </label>
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} /> Yeni nesil jel tips protez tırnak eğitimi(Kurum eğitimi)
            </label>
          </div>
          {errors.includes("Eğitim Seçimi") && (
            <span className="error-message">Lütfen en az bir eğitim seçiniz!</span>
          )}
        </div>

        <button type="submit" className="submitButton">Kaydol</button>
      </form>
    </div>
  );
}

export default Kayıt;











