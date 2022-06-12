import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
//Firestore
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(true)
    const { categoryId } = useParams()

    const getProducts = async () => {
        const productsSnapshot = await getDocs(collection(db, "products"));
        const productList = productsSnapshot.docs.map((doc => {
            let product = doc.data()
            product.id = doc.id
            return product
        }))
        return productList
    }

    useEffect(() => {
        setProducts([])
        setLoadingProducts(true)
        getProducts()
        .then((products) => {
            setProducts([])
            categoryId === undefined ? setProducts(products) : productsFilter(products)
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
            return item.category === categoryId && setProducts(product => [...product, item])       
        })
    }

    const title2 = () => categoryId ? `/ ${categoryId}` : "Destacados"

    return (
        <div>
            { loadingProducts ? (
                <Spinner />
            ):(
                    <ItemList title={`Productos ${title2()}`} items={products} />
            )}
        </div>
    )
}

export default ItemListContainer