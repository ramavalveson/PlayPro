import './CartContainer.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import CartItems from '../CartItems/CartItems'

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const CartContainer = () => {
    const { cartListItems, clearCart, totalCartPrice } = useContext(CartContext)

    return (
        <div>
            <h2 className="cart-title">Carrito de Compras</h2>
            <div className="cart-content">
                {cartListItems.length === 0 && 
                <div className="cart-empty">
                    <LocalMallIcon fontSize="large"/>
                    <p>Tu Carrito Está Vacío!</p>
                </div>
                }
                <CartItems />
            </div>
            {cartListItems.length !== 0 && (
                <div>
                    <div className="cart-accions-button-container">
                        <Button variant="contained">Comprar Ahora</Button>
                        <Button 
                            onClick={() => clearCart()}
                            variant="contained" 
                            color="error"
                        >
                            Vaciar Carrito
                        </Button>
                    </div>
                    <p className="total-cart-price">Total: ${totalCartPrice()}</p>
                </div>
            )}
            <div className="continue-shopping-button-container">
                <Button 
                    variant="contained" 
                    color="success"
                >
                    <Link to="/" className="continue-shopping-link">Continuar Comprando</Link>
                </Button>
            </div>
        </div>
    )
}

export default CartContainer