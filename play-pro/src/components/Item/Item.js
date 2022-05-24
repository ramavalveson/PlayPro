import './Item.css';
import { Button } from '@mui/material'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ title, price, stock, image }) => {
    return (
        <div className="card-item">
            <div>
                <Button variant="text" sx={{fontSize: 12, backgroundColor: 'rgb(247, 247, 247)'}}>Ver Detalle</Button>
            </div>
            <div className="card-body">
                <img src={image} alt={`Producto ${title}`} />
            </div>
            <div className="card-footer">
                <p className="card-title">{title}</p>
                <p className="card-price">${price}</p>
                <ItemCount stock={stock} initial={1} />
            </div>
        </div>
    )
}

export default Item