import React, { Component } from 'react'
import { CategoryNavigation } from './CategoryNavigation'
import { ProductList } from './ProductList'
import { CartSummary } from './CartSummary'
import { ProductPageConnector } from './ProductPageConnector'
import { PaginationControls } from '../common/PaginationControls'

const Pager = ProductPageConnector(PaginationControls)

export class Shop extends Component {

    handleAddToCart = (...args) => {
        this.props.addToCart(...args)
        this.props.history.push('/shop/cart')
    }

    render(){

        return <div className="container-fluid">
            <div className="row bg-dark text-white">
                <div className="col">
                    <div className="navbar-brand">MOTO STORE</div>
                </div>
                <div className="col-2 text-center border align-items-center text-white">
                    <CartSummary {...this.props}></CartSummary>
                </div>
            </div>

            <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/shop/products" categories={this.props.categories}>

                    </CategoryNavigation>
                </div>

                <div className="col-9 p-2">
                    <Pager />
                    <ProductList products={this.props.products} addToCart={this.props.addToCart}></ProductList>
                    <Pager />
                </div>
            </div>
        </div>
    }
}