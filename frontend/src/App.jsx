import React from "react";
import Navbar from "./components/Navbar";
import Anasayfa from "./pages/HomePage";
import Eğitimler from "./pages/Eğitimler";
import Hakkımızda from "./pages/Hakkımızda";
import İletişim from "./pages/İletişim";
import Blog from "./pages/Blog";
import Kayıt from "./pages/Kayıt";
import BlogDetail1 from "./pages/BlogDetail1";
import BlogDetail2 from "./pages/BlogDetail2";
import EğitimDetail from "./pages/EğitimDetail";
import Errorpage from "./pages/Errorpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingButtons from "./components/FloatingButtons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <FloatingButtons /> 
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/eğitimler" element={<Eğitimler />} />
          <Route path="/eğitimler/:id" element={<EğitimDetail />} />
          <Route path="/hakkımızda" element={<Hakkımızda />} />
          <Route path="/iletişim" element={<İletişim />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kayit" element={<Kayıt />} />
          <Route path="/blog-detail-1" element={<BlogDetail1 />} />
          <Route path="/blog-detail-2" element={<BlogDetail2 />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


