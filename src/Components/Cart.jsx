import React from "react";
import "./Cart.css";

export default function Cart(props) {
  const {
    cart,
    handleIncreaseAmount,
    handleDecreaseAmount,
    handleRemoveFromCart,
  } = props;
  const renderItems = () => {
    return cart.map((item, index) => {
      return (
        <div key={item.id + 100} className="cart__item">
          <figure
            className="cart__item__img"
            style={{ backgroundImage: `url(${item.image})` }}
          ></figure>
          <div className="cart__item_details">
            <p>{item.title}</p>
            <button onClick={() => handleIncreaseAmount(index)}>+</button>
            Quantity: {item.quantity}
            <button onClick={() => handleDecreaseAmount(index)}>-</button>
            <br />
            <button onClick={() => handleRemoveFromCart(index)}>
              Remove Item
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="cart">
      <h1>This is your cart</h1>
      {renderItems()}
    </div>
  );
}
