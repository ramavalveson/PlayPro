import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import productsArray from '../../utils/productsMock';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(true)
    const { categoryId } = useParams()

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsArray)
            }, 2000)
        })
    }

    useEffect(() => {
        setProducts([])
        setLoadingProducts(true)
        getProducts()
        .then((res) => {
            setProducts([])
            if(categoryId === undefined) {
                setProducts(res)
            }else {
                productsFilter(res)
            }
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
        setLoadingProducts(false)
        })
    }, [categoryId])

    const productsFilter = (array) => {
        return array.map( (item) => {
            if( item.category == categoryId ) {
                return setProducts(product => [...product, item])        
            }
        })
    }

    return (
        <div>
            { loadingProducts ? (
                <Spinner />
            ):(
                <ItemList items={products} />
            )}
        </div>
    )
}
export default ItemListContainer