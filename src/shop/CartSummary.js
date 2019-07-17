import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CartSummary extends Component{

    getSummary = () => {
        if (this.props.cartItems > 0){
            return <span>
                {this.props.cartItems} item(s), {this.props.cartPrice.toFixed(2)} $
            </span>
        }
        else{
            return <span>There is no item in your cart.</span>
        }
    }

    getLinkClasses = () =>{
        let cart_status = (this.props.cartItems === 0) ? 'disabled' : ''
        return 'btn btn-sm bg-dark text-white ' + cart_status
    }

    render(){
        return <small>
                    <Link className={this.getLinkClasses()} to="/shop/cart">
                        <i className="fa fa-shopping-cart"></i>
                    </Link>
                    {this.getSummary()}
                </small>
        
    }
}