import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import './Cart.css';

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [checkoutVisible, setCheckoutVisible] = useState(false);

    const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.precio * currentItem.quantity;
    }, 0);

    const handleCheckout = () => {
        setCheckoutVisible(true);
    };

    if (cart.length === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
            </div>
        );
    }

    return (
        <div>
            {cart.map((product) => (
                <CartItem key={product.id} {...product} />
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={clearCart} className="clear-cart-button">Limpiar Carrito</button>
            <button onClick={handleCheckout} className="checkout-button">Finalizar Compra</button>

            {checkoutVisible && <Checkout />}
        </div>
    );
};

export default Cart;
