import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className="ListGroup">
      {products.map(prod => (
        <div className="item" key={prod.id}>
          <Item {...prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
