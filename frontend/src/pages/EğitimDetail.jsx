import React from "react";
import { useParams } from "react-router-dom";
import { eğitimList } from "./eğitimList";
import "../css/Eğitimler.css"
import "../css/Navbar.css"
const EğitimDetail = () => {
  const { id } = useParams();
  const eğitim = eğitimList.find((item) => item.id === parseInt(id));

  return (
    <div className="eğitimDetail">
      {/* Başlık */}
      <h1>{eğitim.name}</h1>

      {/* Ana Başlık */}
      <div className="egitim-bilgi">
        <h2>{eğitim.mainTitle}</h2>
      </div>

      {/* Açıklama */}
      <p>{eğitim.description}</p>

      {/* Ekstra Resimler ve Eğitim İçeriği */}
      <div className="content-container">
        {/* Ekstra Resimler */}
        <div className="extraImages">
          {eğitim.extraImages.map((image, index) => (
            <img key={index} src={image} alt={`extra-${index}`} className="extra-image" />
          ))}
        </div>

        {/* Eğitim İçeriği */}
        <div className="content-list">
          <h2>Eğitim İçeriği</h2>
          <ul>
            {eğitim.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EğitimDetail