import './ItemCount.css';
import Button from '@mui/material/Button'

const ItemCount = ({stock, onAdd, quantity, setQuantity }) => {

    const addOne = () => {
        if (quantity < stock) {
            setQuantity(prev => prev + 1)
        }
    }

    return(
        <div className="item-count">
            <div className="count-container">
                <Button onClick={() => setQuantity(prev => prev - 1)} disabled={quantity === 1}>-</Button>
                <p className="count">{quantity}</p>
                <Button onClick={addOne}>+</Button>
            </div>
            <Button 
                variant="contained" 
                onClick={onAdd} 
                disabled={stock === 0}
            >
                Agregar al Carrito
            </Button>
        </div>
    )
}

export default ItemCount