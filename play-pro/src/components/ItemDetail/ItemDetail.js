import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Rating, Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SwiperSlider from '../SwiperSlider/SwiperSlider';

const ItemDetail = ({ item }) => {
    const { id, title, category, price, stock, description } = item;
    const [quantity, setQuantity] = useState(1)
    const [showCount, setShowCount] = useState(true)

    const onAdd = () => {
        setShowCount(false)
    }

    return(
        <div className="container-item-detail">
            <div className="img-detail-container">
                <p>Productos / {category}</p>
                <div className="img-detail">
                    <SwiperSlider item={item} />
                </div>
            </div>
            <div className="data-detail-container">
                <div> 
                    <p className="item-ref">Item Ref. {id}</p>
                    <h2 className="title-product-detail">{title}</h2>
                    <Rating name="no-value" value={null} />
                    <div className="data-price-detail">
                        <p>$ {price}</p>
                        <p>3 cuotas de {Math.round(price / 3)}</p>
                    </div>
                </div>
                <p>{description}</p>
                <p className="stock-product-detail">Stock: {stock}u.</p>
                <div className="data-detail-item-count">
                    {showCount ?
                    <ItemCount  
                        onAdd={onAdd} 
                        quantity={quantity}
                        setQuantity={setQuantity}
                        item={item}
                    />
                    :
                    <div className="finish-purchase-container">
                        <Button variant="contained">
                            <Link 
                                className="link-finish-purchase" 
                                to='/cart'
                            >
                                Terminar Compra
                            </Link>
                        </Button>
                    </div>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail