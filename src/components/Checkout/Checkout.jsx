import { useContext, useState } from "react";
import { runTransaction } from "firebase/firestore";
import { Timestamp, collection,  writeBatch, doc } from "firebase/firestore";
import CartContext from "../../context/CartContext";
import { db } from "../../App";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {

        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.precio * currentItem.quantity;
        }, 0);

        const objOrder = {
            buyer: {
                name, phone, email
            },
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date())
        }

      const batch = writeBatch(db);
    cart.forEach((product) => {
      const productDocRef = doc(db, 'productos', product.id);
      runTransaction(db, async (transaction) => {
        const productSnapshot = await transaction.get(productDocRef);
        const updatedStock = productSnapshot.data().cantidad - product.quantity;
        transaction.update(productDocRef, { cantidad: updatedStock });
      });
    });
      const ordersCollection = collection(db, 'orders');
      const newOrderRef = doc(ordersCollection);

      batch.set(newOrderRef, objOrder);
      batch.update(doc(ordersCollection, newOrderRef.id), { orderId: newOrderRef.id });

      const productsCollection = collection(db, "productos");
      cart.forEach((product) => {
        const productDocRef = doc(productsCollection, product.id);
        batch.update(productDocRef, {
          cantidad: product.cantidad - product.quantity,
        });
      });

      await batch.commit();

      clearCart();
      setOrderId(newOrderRef.id);
    } catch (error) {
      console.error("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Su orden está siendo procesada...</h1>;
  }

  if (orderId) {
    return <h1>El ID de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder}/>
    </div>
  );
};

export default Checkout;
