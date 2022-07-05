import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || [])
    
    const [changeQuantity, setChangeQuantity] = useState(0)

    const addProductToCart = (product, quantity) => {
        let productAddedToCart = cartListItems.find(cartItem => cartItem.id === product.id)
        let isInCart = cartListItems.includes(productAddedToCart)
        if(!isInCart) {
            product.quantity = quantity
            localStorage.setItem('products', JSON.stringify([...cartListItems, product]))
            setCartListItems(cartListItems => [...cartListItems, product])
        }     
    }
    
    const productInCart = (product) => {
        const productAdded = cartListItems.find(cartItem => cartItem.id === product.id)
        let productExist = cartListItems.includes(productAdded)
        return productExist
    }
    
    const cartItemsQuantity = () => {
        return cartListItems.reduce((acc, item) => (acc + item.quantity), 0)
    }

    const totalCartPrice = () => {
        let result = cartListItems.reduce((acc, item) => ( acc + (item.quantity * item.price) ), 0)
        return Number(result)
    }
    
    const removeItemFromCart = (item) => {
        localStorage.setItem('products', JSON.stringify(cartListItems.filter((cartItem) => cartItem.id !== item.id)))
        setCartListItems(cartListItems.filter((cartItem) => cartItem.id !== item.id))
    }

    const changeQuantityOfProduct = (itemId, value) => {
        const itemToChangeQuantity = cartListItems.find(item => item.id === itemId);
        itemToChangeQuantity.quantity = itemToChangeQuantity.quantity + value 
        setChangeQuantity(changeQuantity + value)   
    }


    const clearCart = () => {
        localStorage.setItem('products', JSON.stringify([]))
        setCartListItems([])
    }

    const data = {
        cartListItems,
        setCartListItems,
        addProductToCart,
        removeItemFromCart,
        clearCart,
        cartItemsQuantity,
        totalCartPrice,
        changeQuantityOfProduct,
        productInCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext