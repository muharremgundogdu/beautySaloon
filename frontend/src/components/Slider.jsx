import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, EffectCube, Controller, Mousewheel, Autoplay } from 'swiper/modules';
import "/src/css/Slider.css";
import { Routes, Route, Link } from "react-router"

import image1 from "/src/images/slide-image/1.jpeg";
import image2 from "/src/images/slide-image/2.jpeg";
import image3 from "/src/images/slide-image/3.jpeg";
import image4 from "/src/images/slide-image/4.jpeg";
import image5 from "/src/images/slide-image/5.jpeg";
import image6 from "/src/images/slide-image/6.jpeg";
import image7 from "/src/images/slide-image/7.jpeg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/controller';
import 'swiper/css/autoplay';

const Slider = () => {
    const [textSlider, setTextSlider] = useState(null);
    const [cubeSlider, setCubeSlider] = useState(null);

    return (
        <section className='container-cube-text'>
            {/* Text Slider */}
            <Swiper
                modules={[EffectFade, Controller, Mousewheel, Autoplay]}
                onSwiper={setTextSlider}
                controller={{ control: cubeSlider }}
                effect="fade"
                loop
                speed={800}
                fadeEffect={{
                    crossFade: true, // Aktif olmayan slaytı tamamen gizler
                }}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: true,
                }}
                className="text-slider"
            >
                <SwiperSlide>
                    <h1>İPEK KİRPİK EĞİTİMİ</h1>
                    <p>İpek Kirpik Eğitimi: Güzellikte Uzmanlaşın

                        İpek kirpik uygulamaları, doğal ve etkileyici bakışlar sağlayarak güzellik sektöründe hızla popüler hale gelmiştir. Bu eğitime katılanlar, profesyonel uygulama tekniklerini öğrenirken, kirpik seçimi, yapıştırıcı kullanımı, hijyen ve müşteri memnuniyeti gibi konularda uzmanlaşır.

                        Eğitim, güzellik sektöründe kariyer yapmak isteyen herkese uygundur ve uluslararası geçerliliğe sahip bir sertifika ile iş imkanları sunar. Katılımcılar, detaylara özen gösterme ve müşteri odaklı yaklaşımlarıyla sektörde fark yaratabilir.

                        İpek kirpik eğitimi, doğal güzelliği modern tekniklerle buluşturmak isteyenler için mükemmel bir fırsattır!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Tırnaklarda Sanatın Zarif Dokunuşu</h1>
                    <p>

                        Nail art, tırnakları desenler, renkler ve süslemelerle süsleyen estetik bir sanat dalıdır. Özel teknikler, şablonlar ve aksesuarlarla tırnaklara kişisel bir dokunuş kazandırır. Hem günlük hayatta hem de özel günlerde fark yaratmak isteyenler için ideal bir seçenektir. Nail art ile tırnaklarınıza zarif bir stil katın!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Pürüzsüz Güzellikte Uzmanlaşın</h1>
                    <p>Epilasyon eğitimi, istenmeyen tüylerin kalıcı ve profesyonel bir şekilde giderilmesi için gerekli bilgi ve becerileri kazandırır. Eğitimde, lazer, iğneli ve diğer epilasyon teknikleri, cihaz kullanımı, cilt analizi ve hijyen kuralları öğretilir.

                        Eğitim sonunda alınan sertifika, güzellik salonlarında çalışma veya kendi işinizi kurma fırsatı sunar. Güzellik sektöründe uzmanlaşmak ve kariyerinize yeni bir yön vermek için epilasyon eğitimi ideal bir adımdır!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Güzelliğin ve Bakımın Uzmanlığı</h1>
                    <p>Estetisyenlik, cilt bakımı, epilasyon, masaj ve makyaj gibi birçok alanda uzmanlaşmayı sağlayan bir meslektir. Estetisyenlik eğitimi, cilt yapısı, bakım teknikleri ve profesyonel cihaz kullanımı gibi konuları kapsar.

                        Eğitim sonunda, güzellik merkezlerinde çalışma veya kendi işini kurma fırsatı sunar. Hem güzellik sektöründe kariyer yapmak hem de kişisel gelişim sağlamak isteyenler için estetisyenlik eğitimi, ideal bir başlangıçtır. Güzellik ve bakım dünyasında uzmanlaşmak için bu fırsatı kaçırmayın!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h1> Güzelliğe Kalıcı Dokunuş</h1>
                    <p>Kalıcı makyaj eğitimi, kaş, dudak ve eyeliner gibi bölgelerde doğal ve uzun süre kalıcı estetik uygulamalar yapmayı öğreten profesyonel bir programdır. Eğitimde, pigmentasyon teknikleri, renk seçimi, yüz anatomisi ve hijyen kuralları gibi konular detaylıca ele alınır.

                        Eğitim sonunda, güzellik merkezlerinde çalışma veya bireysel hizmet sunma fırsatı elde edersiniz. Güzellik sektöründe fark yaratmak ve kalıcı estetik uygulamalarda uzmanlaşmak isteyenler için bu eğitim harika bir seçenektir!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Profesyonel Makyaj Eğitimi: Güzellikte Uzmanlaşın</h1>
                    <p>Profesyonel makyaj eğitimi, güzellik sektöründe uzmanlaşmak isteyenler için kapsamlı bir programdır. Bu eğitimde, yüz anatomisi, renk teorisi, makyaj teknikleri ve özel gün makyajı gibi konular öğretilir. Teorik bilginin yanı sıra uygulamalı derslerle, katılımcılar profesyonel bir makyöz/makyör olma yolunda ilerler.

                        Eğitim sonunda kazanılan sertifika, güzellik merkezlerinde veya serbest çalışarak kariyer yapma imkanı sunar. Yaratıcılığınızı konuşturmak ve makyaj dünyasında fark yaratmak için profesyonel makyaj eğitimini keşfedin!</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>Güzellikte Uzmanlaşın</h1>
                    <p>İpek kirpik uygulamaları, doğal ve etkileyici bakışlar sağlayarak güzellik sektöründe hızla popüler hale gelmiştir. Bu eğitime katılanlar, profesyonel uygulama tekniklerini öğrenirken, kirpik seçimi, yapıştırıcı kullanımı, hijyen ve müşteri memnuniyeti gibi konularda uzmanlaşır.

                        Eğitim, güzellik sektöründe kariyer yapmak isteyen herkese uygundur ve uluslararası geçerliliğe sahip bir sertifika ile iş imkanları sunar. Katılımcılar, detaylara özen gösterme ve müşteri odaklı yaklaşımlarıyla sektörde fark yaratabilir.

                        İpek kirpik eğitimi, doğal güzelliği modern tekniklerle buluşturmak isteyenler için mükemmel bir fırsattır!</p>
                </SwiperSlide>
            </Swiper>

            {/* Cube Slider */}
            <Swiper
                className="cube-slider"
                modules={[EffectCube, Controller, Mousewheel, Autoplay]}
                onSwiper={setCubeSlider}
                controller={{ control: textSlider }}
                effect="cube"
                grabCursor
                loop
                speed={800}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 100,
                    shadowScale: 0.94,
                }}
                breakpoints={{
                    300: {
                        cubeEffect: {
                            shadowOffset: 60,
                        },
                    },
                    600: {
                        cubeEffect: {
                            shadowOffset: 100,
                        },
                    },
                }}
            >
                <SwiperSlide>
                    <Link path ="eğitimler/7">
                        <img src={image1} alt="Image 1" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link path ="1">
                        <img src={image2} alt="Image 2" />
                    </Link></SwiperSlide>
                <SwiperSlide>
                    <Link path ="1">
                        <img src={image3} alt="Image 3" />
                    </Link></SwiperSlide>
                <SwiperSlide>
                    <Link path ="1">
                        <img src={image4} alt="Image 4" />
                    </Link></SwiperSlide>
                <SwiperSlide>
                    <Link path ="1">
                        <img src={image5} alt="Image 5" />
                    </Link></SwiperSlide>
                <SwiperSlide><Link path ="1">
                    <img src={image6} alt="Image 6" /></Link></SwiperSlide>
                <SwiperSlide><Link path ="1" >

                    <img src={image7} alt="Image 7" />

                </Link></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Slider;
