import './ItemList.css';
import Item from '../Item/Item';
import { Grid } from '@mui/material';

const ItemList = ({items}) => {
    return (
        <div className="products-list-container">
            <Grid container spacing={2}>
                {
                    items.map( ({ id, title, price, image, stock }) => {
                        return(
                            <Grid item md={3} key={id}>
                                <Item title={title} price={price} stock={stock} image={image}  />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default ItemList