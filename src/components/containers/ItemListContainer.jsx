import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts
    asyncFunc(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="container"> {}
      <h2 className="greeting">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

