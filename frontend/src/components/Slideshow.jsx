import React, { useState, useEffect } from "react";
import "../css/Slideshow.css";

const Slideshow = () => {
    const slides = [
        { title: "İpek Kirpik", subtitle: "Güzellik Sektöründe Kariyer Edinmek İçin En Doğru Adres Akademi Royal!" },
        { title: "Estetisyenlik", subtitle: "En prestijli eğitimlerle kariyer yolculuğunuzu başlatın!" },
        { title: "Kalıcı Makyaj", subtitle: "Kalıcı güzellik için profesyonel eğitimler." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true); // Fade için state

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Önce yazıyı kaybolmaya başlat
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // İçeriği değiştir
                setFade(true); // Yeni yazıyı göster
            }, 500); // Fade-out süresi (CSS'deki transition ile aynı olmalı)
        }, 3000); // Her 4 saniyede bir

        return () => clearInterval(interval); // Temizle
    }, [slides.length]);

    return (
        <div className="slideshow">
            <h2 className="slideshow-header">EĞİTİMLERİMİZ</h2>
            <div className={`slide-content ${fade ? "fade-in" : "fade-out"}`}>
                <h1 className="slide-title">{slides[currentIndex].title}</h1>
                <div className="underline"></div>
                <p className="slide-subtitle">{slides[currentIndex].subtitle}</p>
            </div>
        </div>
    );
};

export default Slideshow;

