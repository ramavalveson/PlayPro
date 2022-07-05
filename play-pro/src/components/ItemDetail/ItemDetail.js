import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Rating, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import BannerProducts from '../BannerProducts/BannerProducts';
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';
import Spinner from '../Spinner/Spinner';

const ItemDetail = ({ item }) => {
    const { id, title, category, price, stock, description, rating } = item;
    const [quantity, setQuantity] = useState(1)
    const [showCount, setShowCount] = useState(true)
    const [products, setProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState(true)

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
                productsFilter(products)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoadingProducts(false)
            })
    }, [id])

    const productsFilter = (array) => {
        const productsFiltered = array.filter((product) => product.category === item.category)
        const finalFilter = productsFiltered.filter((product) => product.id !== item.id)
        return setProducts(finalFilter)
    }

    const onAdd = () => {
        setShowCount(false)
    }

    return (
        <div>
            <div className="container-item-detail">
                <div className="img-detail-container">
                    <p>Productos / {category}</p>
                    <div className="img-detail">
                        <SwiperSlider item={item} />
                    </div>
                </div>
                <div className="data-detail-container">
                    <div>
                        <p className="item-ref">Item Ref. {id}</p>
                        <h2 className="title-product-detail">{title}</h2>
                        <Typography component="legend" sx={{fontSize: 14, color: '#ccc'}}>Valoración:</Typography>
                        <Rating name="read-only" value={rating} readOnly />
                        <div className="data-price-detail">
                            <p>$ {price}</p>
                            <p>3 cuotas de {Math.round(price / 3)}</p>
                        </div>
                    </div>
                    <p>{description}</p>
                    <p className="stock-product-detail">Stock: {stock}u.</p>
                    <div className="data-detail-item-count">
                        {
                            showCount ?
                                <ItemCount
                                    onAdd={onAdd}
                                    quantity={quantity}
                                    setQuantity={setQuantity}
                                    item={item}
                                />
                                :
                                <div className="finish-purchase-container">
                                    <Button variant="contained">
                                        <Link
                                            className="link-finish-purchase"
                                            to='/cart'
                                        >
                                            Terminar Compra
                                        </Link>
                                    </Button>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div>
                {loadingProducts ? (
                    <Spinner />
                ) : (
                    <BannerProducts title={'Productos Que También Podrían Interesarte'} products={products} />
                )}
            </div>
        </div>
    )
}

export default ItemDetail