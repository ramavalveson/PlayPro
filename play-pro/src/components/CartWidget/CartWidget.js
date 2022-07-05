import './CartWidget.css';
import { Button, Menu, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useContext, useState } from 'react';

const CartWidget = () => {
    const { cartItemsQuantity, removeItemFromCart, cartListItems, totalCartPrice, clearCart } = useContext(CartContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="cart-widget-container">
            <Button 
                className="cart-icon-button" 
                disableRipple   
                onClick={handleClick} 
            >
                <ShoppingCartIcon className="cart-icon" fontSize="large"/>
                {cartItemsQuantity() === 0 ? '' : <span className="cart-quantity">{cartItemsQuantity()}</span>}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className="container-items-cart-widget">
                    <p className="cart-widget-title">{cartListItems.length === 0 ? (
                        "El Carrito Está Vacío!"
                    ):(
                        "Tu Carrito"
                    )}
                    </p>
                    <div className="cart-widget-card">
                        {cartListItems.map( (item) => {
                            return(
                            <div className="item-widget-container" key={item.id}>
                                <div className="item-widget-image">
                                    <img src={`../${item.image}`} alt={item.title} />
                                </div>
                                <div className="item-widget-data">
                                    <p>{item.title}</p>
                                    <div className="item-widget-sub-data">
                                        <p>{item.quantity}</p>
                                        <p>x</p>
                                        <p>${item.price}</p>
                                    </div> 
                                </div>
                                <div className="item-widget-remove">
                                    <IconButton onClick={() => removeItemFromCart(item)} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>
                            )
                        })}
                    </div>

                    {cartListItems.length !== 0 ? ( 
                        <>
                            <p className="cart-widget-total-price">Total: ${totalCartPrice()}</p>
                            <div className="button-widget">
                                <Button onClick={handleClose} variant="contained">  
                                        <Link to="/cart" className="btn-cart-widget">Terminar Compra</Link>      
                                </Button>
                                <Button 
                                    variant="contained"
                                    color="error"
                                    onClick={() => clearCart()}
                                >
                                    Vaciar Carrito
                                </Button>
                            </div>
                        </>
                    ):(
                        <div className="btn-continue-shopping">
                            <Button 
                                onClick={handleClose} 
                                variant="contained" 
                                color="success"
                            > 
                                <Link to="/" className="btn-cart-widget">Empezar a Comprar</Link>  
                            </Button>
                        </div>
                    )}
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget