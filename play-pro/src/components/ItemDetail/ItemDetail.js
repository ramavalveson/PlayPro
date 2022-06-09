import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Rating, Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const { id, title, category, price, stock, image } = item;
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
                    <img src={image} alt={title}/>
                </div>
            </div>
            <div className="data-detail-container">
                <div> 
                    <div className="data-title-detail-container">
                        <h2>{title}</h2>
                        <p>Item No. {id}</p>
                    </div>
                    <div className="data-price-detail">
                        <Rating name="no-value" value={null} />
                        <p>$ {price}</p>
                        <p>3 cuotas de {Math.round(price / 3)}</p>
                    </div>
                </div>
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