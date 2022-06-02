import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import products from '../../utils/productsMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [ product, setProduct ] = useState({})
    const [loadingProducts, setLoadingProducts] = useState(true)

    const productFind = products.find( (product) => product.id == id)

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productFind)
            }, 1000)
        })
    }

    useEffect(() => {
        getItem()
        .then( (res) => {
            setProduct(res)
        })
        .catch( (err) => {
            console.log(err)
        })
        .finally( () => {
            setLoadingProducts(false)
        })
    }, [])

    return (
        <div>
            { loadingProducts ? (
                <Spinner />
            ):(
                <ItemDetail item={product}/>
            )}
        </div>
    )
}

export default ItemDetailContainer