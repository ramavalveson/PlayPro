import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {
    const { id, title, category, price, stock, image } = item;
    return(
        <div className="container-item-detail">
            <div className="img-detail-container">
                <p>Productos / {category}</p>
                <div className="img-detail">
                    <img src={image} alt={title}/>
                </div>
            </div>
            <div className="data-detail-container">
                <div> 
                    <div className="data-title-detail-container">
                        <h2>{title}</h2>
                        <p>Item No. {id}</p>
                    </div>
                    <div className="data-price-detail">
                        <p>$ {price}</p>
                        <p>3 cuotas de {Math.round(price / 3)}</p>
                    </div>
                </div>
                <div className="data-detail-item-count">
                    <ItemCount stock={stock} initial={1}/>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail