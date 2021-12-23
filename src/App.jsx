import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import api from "./api";
import "./App.css";

export default class App extends Component {
  state = { jewelry: [], cart: [] };

  componentDidMount = () => {
    this.getData();
  };

  getData = async () => {
    try {
      const { data } = await api.get("/category/jewelery");
      this.setState({ jewelry: data });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  handleAdd = (item) => {
    if (!this.state.cart[0]) {
      this.addItem(item);
    } else if (!this.searchCart(item)) {
      this.addItem(item);
    }
  };

  searchCart = (item) => {
    return this.state.cart.includes(item);
  };

  addItem = (item) => {
    item.quantity = 1;
    this.setState({ cart: [...this.state.cart, item] });
  };

  handleIncreaseAmount = (index) => {
    const cart = this.state.cart;
    const item = this.state.cart[index];
    item.quantity = item.quantity + 1;
    cart.splice(index, 1, item);
    this.setState({ cart });
  };
  handleDecreaseAmount = (index) => {
    if (this.state.cart[index].quantity > 0) {
      const cart = this.state.cart;
      const item = this.state.cart[index];
      item.quantity = item.quantity - 1;
      cart.splice(index, 1, item);
      this.setState({ cart });
    }
  };

  handleRemoveFromCart = (index) => {
    const cart = this.state.cart;
    cart.splice(index, 1);
    this.setState({ cart });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header cart={this.state.cart.length} />
          <div className="place-holder"></div>
          <Route path="/" exact component={Homepage} />
          <Route path="/products" exact>
            <Products handleAdd={this.handleAdd} jewelry={this.state.jewelry} />
          </Route>
          <Route path="/cart" exact>
            <Cart
              handleDecreaseAmount={this.handleDecreaseAmount}
              handleIncreaseAmount={this.handleIncreaseAmount}
              cart={this.state.cart}
              handleRemoveFromCart={this.handleRemoveFromCart}
            />
          </Route>
        </Router>
      </div>
    );
  }
}
