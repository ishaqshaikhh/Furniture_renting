import React, { useRef } from 'react'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from '../styles/productCard.module.css'

const Products = () => {

    const swiperRef = useRef(null);

    const slideTo = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    const slideNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const slidePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    }




    return (
        <>
            <Swiper
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                breakpoints={{
                    // when window width is >= 640px
                    599: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className=' position-relative overflow-visible'
            >
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <div className={styles.right} onClick={slideNext}>
                    <FaArrowRightLong />
                </div>
                <div className={styles.left} onClick={slidePrev}>
                    <FaArrowLeftLong />
                </div>
            </Swiper>
        </>
    )
}

export default Products
