import React from "react";
import './CartItem.css'

const CartItem = ({ id, nombre, precio, quantity }) => {
    const subtotal = precio * quantity;
    return (
        <div className="cart-item">
            <div className="item-details">
                <h4>{nombre}</h4>
                <p>Precio: ${precio}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${subtotal.toFixed(2)}</p> {/* Muestra el subtotal */}
            </div>
        </div>
    );
};

export default CartItem;
