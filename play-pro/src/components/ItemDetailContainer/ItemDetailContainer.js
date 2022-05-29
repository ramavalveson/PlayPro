import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { product1 } from '../../utils/productsMock'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product1)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
        .then((res) => {
            setProduct(res)
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
            <ItemDetail item={product}/>
        </div>
    )
}

export default ItemDetailContainer