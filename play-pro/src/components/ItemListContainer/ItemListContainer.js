import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({title}) => {
    return (
        <div>
            <h2 className="title">{title}</h2>
            <ItemCount stock={6} initial={1} />
        </div>
    )
}
export default ItemListContainer