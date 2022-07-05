import './Banner.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    return(
        <div className="banner">
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
                        <img className="imagen" src={'../3-cuotas.png'} alt={'cuotas'} />
                    </SwiperSlide> 
                    <SwiperSlide>
                        <img className="imagen" src={'../banner-deportes.png'} alt={'banner-deportes'} />
                    </SwiperSlide> 
            </Swiper>
        </div>
    )
}

export default Banner