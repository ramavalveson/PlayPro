import './ItemCount.css';
import { useContext } from 'react';
import Button from '@mui/material/Button'
import CartContext from '../../context/CartContext';

const ItemCount = ({ onAdd, quantity, setQuantity, item }) => {
    const { addProductToCart } = useContext(CartContext)

    const addOne = () => {
        if (quantity < item.stock) {
            setQuantity(prev => prev + 1)
        }
    }

    const productAdded = () => {
        addProductToCart(item, quantity)
        onAdd()
    }

    return(
        <div className="item-count">
            <div className="count-container">
                <Button onClick={() => setQuantity(prev => prev - 1)} disabled={quantity === 1}>-</Button>
                <p className="count">{quantity}</p>
                <Button onClick={() => addOne()}>+</Button>
            </div>
            <Button 
                variant="contained" 
                onClick={() => productAdded()} 
                disabled={item.stock === 0}
            >
                Agregar al Carrito
            </Button>
        </div>
    )
}

export default ItemCount