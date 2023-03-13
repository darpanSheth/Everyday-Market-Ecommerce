import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">Everyday-Market E-Commerce</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart<sub><i className="fa fa-shopping-cart" style={{'font-size':"24px"}}></i></sub><sup style={{'font-size':'24px', 'color':'black'}}>{this.props.productsInCart.reduce((total,p) => total+p.count,0)}</sup></Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            </React.Fragment>
        );
    }
}
 
export default Navbar;