import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PaginationControls } from '../common/PaginationControls'
import { ProductsRow } from './ProductsRow'

export class ProductsTable extends Component {
    render = () => <div>
        <h4 className="bg-info text-white text-center p-2">
            { this.props.totalSize } Products
        </h4>

        <PaginationControls keys={['ID', 'Name', 'Category']} {...this.props}></PaginationControls>

        <table className="table table-sm table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th className="text-right">Price</th>
                    <th className="text-center"></th>
                </tr>
            </thead>
            <tbody>
                { this.props.products.map((product) => 
                    <ProductsRow key={product.id} product={product} deleteProduct={this.props.deleteProduct}>

                    </ProductsRow>
                    )}
            </tbody>
        </table>

        <div className="text-center">
            <Link to="/admin/products/create" className="btn btn-primary">
                Create Product
            </Link>
        </div>

    </div>
}