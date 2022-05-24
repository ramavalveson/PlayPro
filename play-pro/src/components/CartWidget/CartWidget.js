import './CartWidget.css';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <Button disableRipple>
            <ShoppingCartIcon className="cart-icon" fontSize="large"/>
            <span className="cart-quantity">0</span>
        </Button>
    )
}

export default CartWidget