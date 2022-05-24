import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';

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

    const productsArray = [
        {id: 1, title: 'Paleta Wilson', price: 23000, stock: 5, image: 'https://http2.mlstatic.com/D_NQ_NP_620461-MLA46112543810_052021-O.webp'},
        {id: 2, title: 'Tubo pelotas x3 Head', price: 2500, stock: 18, image: 'https://http2.mlstatic.com/D_NQ_NP_929712-MLA48011257223_102021-O.webp'},
        {id: 3, title: 'Guantes Arquero Reusch', price: 13000, stock: 10, image: 'https://http2.mlstatic.com/D_NQ_NP_879479-MLA49876974887_052022-O.webp'},
        {id: 4, title: 'Raqueta Babolat Aero', price: 105000, stock: 9, image: 'https://http2.mlstatic.com/D_NQ_NP_611920-MLA48936014300_012022-O.webp'},
        {id: 5, title: 'Pelota Nassau N°4', price: 15000, stock: 11, image: 'https://http2.mlstatic.com/D_NQ_NP_789356-MLA48725142862_012022-O.webp'},
        {id: 6, title: 'Pelota Spalding N°7', price: 24000, stock: 4, image: 'https://http2.mlstatic.com/D_NQ_NP_874739-MLA31594584742_072019-O.webp'},
        {id: 7, title: 'Pelota Voley Penalty', price: 18000, stock: 0, image: 'https://http2.mlstatic.com/D_NQ_NP_848027-MLA41876612298_052020-O.webp'},
        {id: 8, title: 'Paleta Babolat Counter Viper', price: 60000, stock: 2, image: 'https://http2.mlstatic.com/D_NQ_NP_903289-MLA48532607197_122021-O.webp'},
    ];
    return (
        <div>
            <h2 className="item-list-title">{title}</h2>
            <ItemList items={products} />
        </div>
    )
}
export default ItemListContainer