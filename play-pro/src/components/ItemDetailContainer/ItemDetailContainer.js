import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
//Firebase 
import { doc, getDoc } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [ product, setProduct ] = useState({})
    const [loadingProducts, setLoadingProducts] = useState(true)

    const getProduct = async () => {
        const docRef = doc(db, "products", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }

    useEffect(() => {
        getProduct()
        .then( (product) => {
            setProduct(product)
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