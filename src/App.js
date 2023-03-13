import React, { Component } from 'react';
import axios from 'axios';
import Products from './components/products';
import Cart from './components/cart';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';

class App extends Component{

  state = {
    products: [],
    productsInCart: []
  }
 
  addToCart = (product) => {
    const productsInCart = [...this.state.productsInCart]
    const cartProduct = productsInCart.find(p => p.id === product.id);

    if(cartProduct){
      cartProduct.count++
    }

    else{
      product.count = 1;
      productsInCart.push(product)
    }

   
    this.setState({...this.state, productsInCart})
  };

  addProduct = (product) => {
    this.setState({count: this.state.productsInCart.find(p => p.id === product.id).count++})
  }

  substractProduct = (product) => {
    this.setState({count: this.state.productsInCart.find(p => p.id === product.id).count--})
  }

  deleteFromCart = (product) => {
    const productsInCart = [...this.state.productsInCart.filter(p => p.id !== product.id)];
    
    this.setState({...this.state, productsInCart})
  }

  componentDidMount(){
    axios.get("http://localhost:3003/products.json").then(res => {
      console.log("res", res);
      this.setState({products: res.data});
    }).catch(err => console.log(err))
  }

  render(){
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar productsInCart={this.state.productsInCart}></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products
            products={this.state.products} addToCart={this.addToCart}></Products>}>
          </Route>
          <Route path="/cart" element={<Cart
            productsInCart={this.state.productsInCart} addProduct={this.addProduct} substractProduct={this.substractProduct} deleteFromCart={this.deleteFromCart}></Cart>}>
          </Route> 
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
}

export default App;
