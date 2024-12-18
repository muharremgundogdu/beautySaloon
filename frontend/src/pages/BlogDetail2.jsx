import React from 'react';
import Epilasyo from '../images/Epilasyo.jpg';
import "../css/Blog.css"
import "../css/Navbar.css"
const BlogDetail2 = () => {
  return (
    <div className="blogDetailContainer">
      <h1>Güzellik Uzmanı Olma Şartları Nelerdir?
      </h1>
      <div className="blogCard">
        <img src={Epilasyo} alt="Epilasyon" className="blogDetailImage" />
        <p>
        Eğer kozmetik bilimine merak duyuyorsanız, bireysel bakıma önem veriyorsanız ve güzellikle ilgili tüm işlemleri yapmaktan keyif alıyorsanız güzellik uzmanı olmak için sertifika programlarına başvurabilirsiniz.
      Güzellik uzmanı olmak için Anadolu Meslek / Kız Meslek liselerinin “Kuaförlük ve Cilt Bakımı” bölümlerinden mezun olmak ya da MEB onaylı kursların “Güzellik Uzmanlığı” sertifika programlarını tamamlamak yeterli olacaktır. Bunun yanında bazı özel kuruluşların açmış olduğu “Güzellik Uzmanlığı” kursuna katılarak da uzmanlaşabilirsiniz. Lisede başladığınız bu eğitimi üniversitelerin “Kuaförlük ve Güzellik Bilgisi Öğretmenliği” lisans bölümünde geliştirerek devam edebilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default BlogDetail2;