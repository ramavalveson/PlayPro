import './ItemList.css';
import Item from '../Item/Item';
import { Grid } from '@mui/material';

const ItemList = ({title, items}) => {
    return (
        <div className="products-list-container">
            <h2 className="item-list-title">{title}</h2>
            <Grid container spacing={2}>
                {
                    items.map( ({ id, title, price, image, stock }) => {
                        return(
                            <Grid item md={3} key={id}>
                                <Item 
                                    id={id} 
                                    title={title} 
                                    price={price} 
                                    stock={stock} 
                                    image={image}  
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default ItemList