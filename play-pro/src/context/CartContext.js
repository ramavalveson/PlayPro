import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])

    const [changeQuantity, setChangeQuantity] = useState(0)

    const addProductToCart = (product, quantity) => {
        let productAddedToCart = cartListItems.find(cartItem => cartItem.id === product.id)
        let isInCart = cartListItems.includes(productAddedToCart)
        if(!isInCart) {
            product.quantity = quantity
            setCartListItems(cartListItems => [...cartListItems, product])
        }else {
            console.log('Este producto ya ha sido agregado al carrito')  
        }      
    }
    
    const cartItemsQuantity = () => {
        return cartListItems.reduce((acc, item) => (acc + item.quantity), 0)
    }

    const totalCartPrice = () => {
        return cartListItems.reduce((acc, item) => ( acc + (item.quantity * item.price) ), 0);
    }
    
    const removeItemFromCart = (itemId) => {
        const itemToRemove = cartListItems.find(item => item.id === itemId);
        let indexOfItem = cartListItems.indexOf(itemToRemove);
        cartListItems.splice((indexOfItem), 1)
        setCartListItems(cartListItems => [...cartListItems])
    }

    const changeQuantityOfProduct = (itemId, value) => {
        const itemToReduceQuantity = cartListItems.find(item => item.id === itemId);
        itemToReduceQuantity.quantity = itemToReduceQuantity.quantity + value 
        return setChangeQuantity(changeQuantity + value)     
    }


    const clearCart = () => setCartListItems([])

    const data = {
        cartListItems,
        addProductToCart,
        removeItemFromCart,
        clearCart,
        cartItemsQuantity,
        totalCartPrice,
        changeQuantityOfProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext