import './ItemCount.css';
import { useState } from 'react';
import Button from '@mui/material/Button'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial)
    const addOne = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }
    const onAdd = () => {
        if (stock >= count) {
            console.log(`Agregaste ${count} items al carrito`)
        }
    }
    return(
        <div className="item-count">
            <div className="count-container">
                <Button onClick={() => setCount(prev => prev - 1)} disabled={count === initial}>-</Button>
                <p className="count">{count}</p>
                <Button onClick={addOne}>+</Button>
            </div>
            <Button variant="contained" onClick={onAdd} disabled={stock === 0}>Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount