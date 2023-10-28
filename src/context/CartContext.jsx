import { createContext, useState } from "react"


export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        const existingProductIndex = cart.findIndex((product) => product.id === item.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart((prev) => [...prev, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;