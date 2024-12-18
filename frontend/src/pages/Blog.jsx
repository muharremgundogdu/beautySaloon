import React from 'react';
import { Link } from 'react-router-dom'; // Link bileşeni import
import Blog1 from "../images/Blog1.jpg";
import Image2 from "../images/image2.jpg";
import "../css/Blog.css"
import "../css/Navbar.css"
const Blog = () => {
  return (
    <div className="blog">
      <div className="blogList">
        {/* Blog Item 1 */}
        <div className="blogItem">
          <Link to="/blog-detail-1">
            <img src={Blog1} alt="Güzellik Uzmanı" />
            <h2>Güzellik Uzmanı Ne İş Yapar? Görev ve Sorumlulukları Nelerdir?
            </h2>
          </Link>
        </div>

        {/* Blog Item 2 */}
        <div className="blogItem">
          <Link to="/blog-detail-2">
            <img src={Image2} alt="Epilasyon" />
            <h2>Güzellik Uzmanı Olma Şartları Nelerdir?
            </h2>
            <p>Eğer kozmetik bilimine merak duyuyorsanız...</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;

