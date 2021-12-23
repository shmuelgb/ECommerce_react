import React from "react";
import "./Products.css";

export default function Products(props) {
  const displayProducts = () => {
    if (props.jewelry[0]) {
      return props.jewelry.map((item) => {
        return (
          <div className="product" key={item.id}>
            <figure
              className="product-img"
              style={{ backgroundImage: `url(${item.image})` }}
            ></figure>
            <div className="product-details">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button onClick={() => props.handleAdd(item)}>Add to cart</button>
            </div>
          </div>
        );
      });
    }
  };
  return <div className="Products">{displayProducts()}</div>;
}
