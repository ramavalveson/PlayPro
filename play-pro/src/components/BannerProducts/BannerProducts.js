import './BannerProducts.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const BannerProducts = ({ title, products }) => {
    return (
        <div>
            <h2 className="banner-products-title">{title}</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {products.map((product) => {
                    return(
                        <SwiperSlide key={product.id}>
                            <div className="items-banner-products">
                                <p>{product.title}</p>
                                <div className="items-banner-img-container">
                                    <img src={`../${product.image}`} alt={product.title} />
                                </div>
                                <p>${product.price}</p>
                                <Button variant="contained">
                                    <Link className="btn-banner-detail" to={`/item/${product.id}`}>Ver Detalle</Link>
                                </Button>
                            </div>
                        </SwiperSlide>
                )})}
            </Swiper>
        </div>
    )
}

export default BannerProducts