// import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperSlider = ({ item }) => {
    return (
        <div>
            {item.images ? (
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#ccc",
                        "--swiper-pagination-color": "#ccc",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img src={`../${item.image}`} />
                    </SwiperSlide>
                    {item.images.map((image) => {
                        return (
                            <SwiperSlide>
                                <img src={`../${image}`} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            ) : (
                <img src={`../${item.image}`} alt={`Imagen de ${item.title}`}/>
            )}
        </div >
    )
}

export default SwiperSlider