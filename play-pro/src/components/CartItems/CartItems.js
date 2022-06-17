import './CartItems.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import { IconButton, Button } from '@mui/material';

const CartItems = () => {
    const { cartListItems, removeItemFromCart, changeQuantityOfProduct } = useContext(CartContext)

    return (
        cartListItems.map((item) => {
            return (
                <div className="card-of-cart-container" key={item.id}>
                    <div className="img-cart-container">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="item-cart-data-container">
                        <h3>{item.title}</h3>
                        <p>Item Ref. {item.id}</p>
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
                        <IconButton onClick={() => removeItemFromCart(item)} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            )
        })
    )
}

export default CartItems