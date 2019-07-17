import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CartDetailsRow } from './CartDetailsRow'

export class CartDetails extends Component{
    getLinkClasses(){
        let status = (this.props.cartItems === 0) ? 'disabled' : ''
        return 'btn btn-secondary m-1' + status
    }

    render(){
        return <div className="m-3">
            <h2 className="text-center">Your cart list:</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <CartDetailsRow cart={this.props.cart} cartPrice={this.props.cartPrice}
                        updateQuanity={this.props.updateCartQuanity} removeFromCart={this.props.removeFromCart}>

                    </CartDetailsRow>
                </tbody>
            </table>

            <div className="text-center">
                <Link className="btn btn-primary m-1" to="/shop">
                    Continue Shopping
                </Link>
                <Link className={this.getLinkClasses()} to="/shop/checkout">
                    Checkout
                </Link>

            </div>
        </div>
    }
}