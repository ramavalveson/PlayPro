import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import productsArray from '../../utils/productsMock';

const ItemListContainer = ({title}) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsArray)
            }, 2000)
        })
    }

    useEffect(() => {
        getProducts()
        .then((res) => {
            setProducts(res)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            console.log('Finalizó la promesa.')
        })
    }, [])

    return (
        <div>
            <h2 className="item-list-title">{title}</h2>
            <ItemList items={products} />
        </div>
    )
}
export default ItemListContainer