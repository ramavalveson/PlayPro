import './CartContainer.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

const CartContainer = () => {
    const { cartListItems, removeItemFromCart, clearCart, totalCartPrice, changeQuantityOfProduct } = useContext(CartContext)

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
                {cartListItems.map((item) => {
                    return (
                        <div className="card-of-cart-container" key={item.id}>
                            <div className="img-cart-container">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="item-cart-data-container">
                                <h3>{item.title}</h3>
                                <p>Item No. {item.id}</p>
                            </div>
                            <div className="item-cart-values-container">
                                <p>Cantidad</p>
                                <div className="quantity-control">
                                    <Button 
                                        className="button-quantity-control" 
                                        onClick={() => changeQuantityOfProduct(item.id, -1)}
                                        disabled={item.quantity === 1}
                                    >
                                        <DoDisturbOnIcon />
                                    </Button>
                                    <p>{item.quantity}</p>
                                    <Button
                                        className="button-quantity-control" 
                                        onClick={() => changeQuantityOfProduct(item.id, +1)}
                                        disabled={item.stock <= item.quantity}
                                    >
                                        <AddCircleIcon />
                                    </Button>
                                </div>
                                <p>Total $ {item.price * item.quantity}</p>
                            </div>
                            <div className="delete-item-container">
                                <IconButton onClick={() => removeItemFromCart(item.id)} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                    )
                })}
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