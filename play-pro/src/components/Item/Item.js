import './Item.css';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const Item = ({ id, title, price, stock, image, quantity }) => {
    const item = { id, title, price, stock, image, quantity }

    const { addProductToCart } = useContext(CartContext)

    return (
        <div className="card-item">
            <div>
                <Button
                    variant="text"
                    sx={{ fontSize: 12, backgroundColor: 'rgb(247, 247, 247)', boxShadow: '0.2rem 0.2rem 0.2rem #ccc' }}>
                    <Link className="button-detail-view" to={`/item/${id}`}>Ver Detalle</Link>
                </Button>
            </div>
            <div className="card-body">
                <img src={`../${image}`} alt={`Imagen - ${title}`} />
            </div>
            <div className="card-footer">
                <p className="card-title">{title}</p>
                <p className="card-price">${price}</p>
                <Button 
                    sx={{ boxShadow: '0.2rem 0.2rem 0.5rem rgb(131, 131, 131)' }}
                    variant="contained" 
                    onClick={() => addProductToCart(item, 1)} 
                    disabled={stock < 1} 
                >
                    {stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
                </Button>
            </div>
        </div>
    )
}

export default Item