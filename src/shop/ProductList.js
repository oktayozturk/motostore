import React, { Component } from 'react'

export class ProductList extends Component {   
    
    render(){
        
        if (this.props.products == null || this.props.products.length === 0){
            return <h5 className="p-2">No products yet</h5>
        }
        
        return this.props.products.map((product) => 
            <div className="card m-1 p-1 bg-light" key={product.id}>
                <h4>
                    {product.name}
                    <span className="badge badge-pill badge-primary float-right">
                        ${product.price.toFixed(2)}
                    </span>
                </h4>
                <div className="card-text bg-white p-1">
                    {product.category} : {product.description}
                    <button className="btn btn-success btn-sm float-right" 
                            onClick={() => this.props.addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        )
    }
}

