import React, { Component } from 'react';
import './products.css';

class Products extends Component {
    
    render() { 
        return (
        <div>
            <div className="HeadingsContainer">
              <h3>Welcome to the Everyday-Market E-Commerce Website.</h3>
              <h5>Add to Cart from all the available below products and shop</h5>
            </div>
            <div className='ProductContainer'>
              {
              this.props.products.map(product =>
              <div className="card" style={{width: "18rem"}}>
                <img src={product.img} height="200px" alt=""/>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <h5>Price: ${product.price}</h5>
                  <button className="btn btn-primary" onClick={() => this.props.addToCart(product)}>Add to Cart</button>
                </div>
              </div>
              )}
            </div>
        </div>);
    }
}
 
export default Products;