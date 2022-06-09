import './CartWidget.css';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const { cartItemsQuantity } = useContext(CartContext)

    return (
        <div className="cart-widget-container">
            <p className={cartItemsQuantity() === 0 ? "cart-widget-empty" : "cart-widget-none"}>
                El Carrito está Vacío!
            </p>
            <Button className="cart-icon-button" disableRipple>
                <Link to='/cart'>
                    <ShoppingCartIcon className="cart-icon" fontSize="large"/>
                    {cartItemsQuantity() === 0 ? '' : <span className="cart-quantity">{cartItemsQuantity()}</span>}
                </Link>
            </Button>
        </div>
    )
}

export default CartWidget