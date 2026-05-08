import {Navigation, Pagination, EffectCards, 
        EffectCube, EffectCoverflow, EffectCreative,
        EffectFade, EffectFlip,Autoplay, 
        Mousewheel, Keyboard } from "swiper/modules";

import { useState, useEffect, useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import CVCards from "./CvCards";
import img from "../../../assets/hero.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroCarousel = function(){
    const [widthCarousel, setWidthCarousel] = useState(100);
    const parentRef = useRef(null);

    useEffect(() => {
        // observer for carousel width
        const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            setWidthCarousel(entry.contentRect.width);
        }
        });

        if (parentRef.current) {
        observer.observe(parentRef.current);
        }

        return () => {
        if (parentRef.current) {
            observer.disconnect();
        }
        };
    }, [widthCarousel]);

    return (
        <div ref={parentRef} className={"container-parent w-100"} style={{ padding:"24px 0" }}>
            <Swiper
                modules={
                    [
                        Navigation, Autoplay, Pagination, 
                        Mousewheel, Keyboard, EffectCards, 
                        EffectCoverflow, EffectFade, EffectFlip,
                        EffectCreative
                    ]}
                image={img}
                navigation={true ? widthCarousel > 640 : false}
                loop={true}
                pagination={{ clickable: true }}
                keyboard
                style={{height:500, width: `${widthCarousel}px`, padding:"0px 0px"}}
                // slidesPerView={2}
                spaceBetween={30}
                // speed={3000}
                effect={"coverflow"}

                coverflowEffect={
                    {
                        rotate: 90,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }
                }
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                updateOnWindowResize={true}
                breakpoints={{
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    },

                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                    spaceBetween: 40,
                    },
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                    },  
                }}

            >
                <SwiperSlide> <CVCards color={"primary"} name="Template 1" badge_name="Populaire"/> </SwiperSlide>
                <SwiperSlide> <CVCards color={"secondary"} name="Template 1" badge_name="Populaire"/> </SwiperSlide>
                <SwiperSlide> <CVCards color={"success"} name="Template 1" badge_name="Populaire"/> </SwiperSlide>
                <SwiperSlide> <CVCards color={"info"} name="Template 1" badge_name="Populaire"/> </SwiperSlide>
                <SwiperSlide> <CVCards color={"dark"} name="Template 1" badge_name="Populaire"/> </SwiperSlide>
                <SwiperSlide> <CVCards color={"danger"} name="Template 1" badge_name="Populaire"/> </SwiperSlide>
            
            </Swiper>
        </div>
    );
};

export default HeroCarousel;