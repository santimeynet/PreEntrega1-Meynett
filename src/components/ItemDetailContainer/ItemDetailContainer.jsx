import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ greeting }) => {

  const [product, setProducts] = useState(null);

  const {itemId} = useParams()

  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer"> {}
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
