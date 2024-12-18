import React from 'react';
import GüzellikEk1 from '../images/GüzellikEk1.jpg';
import "../css/Blog.css"
import "../css/Navbar.css"
const BlogDetail1 = () => {
  return (
    <div className="blogDetailContainer">
      <h1>Güzellik Uzmanı Ne İş Yapar? Görev ve Sorumlulukları Nelerdir?
      </h1>
      <div className="blogCard">
        <img src={GüzellikEk1} alt="Güzellik Uzmanı" className="blogDetailImage" />
        <p>
         Güzellik uzmanı, cildin analizini yapar ve cilt tipine karar verir. Bunun akabinde gerekli cilt işlemlerini (peeling, maske vb.) uygular.
Müşteriye işlem yapmadan önce onun isteğine göre ihtiyaçlarını belirler.
Epilasyon işlemiyle istenmeyen tüylerin giderilmesine yardımcı olur.
Manikür ve pedikür işlemlerini hijyenik şekilde gerçekleştirir.
Çeşitli zayıflama ekipmanlarını kişinin ihtiyacına göre uygular.
Deneyimli güzellik uzmanları yüze ve vücuda masaj yapar.
Cilt tipine karar verdikten sonra çeşitli maskeler uygular, kırışıklık/çatlak azaltan bazı işlemleri gerçekleştirir.
Yüz tipine ve kişinin isteğine bağlı olarak profesyonel makyaj yapar.
Güzellik Uzmanı Ne Demek?
Güzellik merkezlerinde epilasyon, cilt analizi ve bakımı, profesyonel makyaj, çeşitli vücut işlemleri gerçekleştiren ve bu süreçlerde kozmetik bilimi ve teknolojisinden yararlanarak profesyonel bir şekilde hizmet veren kişidir.

        </p>
      </div>
    </div>
  );
};

export default BlogDetail1;