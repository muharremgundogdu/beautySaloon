import React from "react";
import { eğitimList } from "../pages/eğitimList";
import { Link } from "react-router-dom";
import "../css/Eğitimler.css"
import "../css/Navbar.css"
function Eğitimler() {
  const groupedEğitimler = eğitimList.reduce((acc, eğitim) => {
    if (!acc[eğitim.category]) acc[eğitim.category] = [];
    acc[eğitim.category].push(eğitim);
    return acc;
  }, {});

  return (
    <div className="eğitimler">
      <Link to="/kayit">
        <button className='sertifika-button' >EĞİTİMLERİMİZİ İNCELE</button>
      </Link>
      <h1 className="eğitimTitle">Eğitimler</h1>
      {Object.entries(groupedEğitimler).map(([category, eğitimler]) => (
        <div key={category} className="categorySection">
          <h2 className="categoryTitle">{category}</h2>
          <div className="eğitimList">
            {eğitimler.map((eğitimItem) => (
              <div className="eğitimItem" key={eğitimItem.id}>
                <Link to={`/eğitimler/${eğitimItem.id}`} className="eğitimLink">
                  <img src={eğitimItem.image} alt={eğitimItem.name} />
                  <h3>{eğitimItem.name}</h3>
                </Link>
              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  );
}

export default Eğitimler;