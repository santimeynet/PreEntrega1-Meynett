import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import './ItemDetialContainer.css'

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../App";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true)

  const {itemId} = useParams()

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'productos', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productsAdapted = { id: response.id, ...data }
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {loading ? <p>Cargando...</p> : (products ? <ItemDetail {...products} /> : <p>No se encontró el producto.</p>)}
    </div>
  );
};

export default ItemDetailContainer;
