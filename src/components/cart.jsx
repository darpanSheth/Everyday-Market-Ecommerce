import React, { Component } from 'react';
import './cart.css';

class Cart extends Component {
   
    render() { 
        return (
        <div className='CartProductsContainer'>
        <h2>Shopping Cart: Currently there are {this.props.productsInCart.reduce((total,p) => total+p.count,0)} products in the cart</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col"></th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.productsInCart.map(product => 
            <tr>
              <th scope="row">{product.name}</th>
              <td>
                <div className="card" style={{width: "18rem"}}>
                  <img src={product.img} height="200px" alt=""/>
                  <div className="card-body">
                    <p className="card-text">{product.description}</p>
                    <h5>Price: ${product.price}</h5>
                  </div>
                </div>
              </td>
              <td><button className="btn btn-primary" onClick={() => this.props.addProduct(product)}>+</button> &nbsp;&nbsp;{product.count}&nbsp;&nbsp; <button className="btn btn-primary" onClick={() => this.props.substractProduct(product)} disabled={product.count===1}>-</button></td>
              <td>${product.price*product.count}</td>
              <td><button className="btn btn-danger" onClick={() => this.props.deleteFromCart(product)}>Delete</button></td>
            </tr>
            )}
          </tbody>
        </table>
        <h3>Total amount to pay {this.props.productsInCart.reduce((total,p) => total+p.price*p.count,0)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='btn btn-success'>Dummy Checkout button</button></h3>
      </div> );
    }
}
 
export default Cart;