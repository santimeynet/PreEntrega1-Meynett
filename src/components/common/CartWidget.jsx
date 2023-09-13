
const CartWidget = () => {
  const itemCount = 10;

  return (
    <div className="position-relative">
      <img width="32" height="32" src="https://img.icons8.com/pixels/50/shopping-cart--v1.png" alt="shopping-cart--v1"/>
      {itemCount > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
