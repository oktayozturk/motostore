import React, { Component } from 'react'
import { OrdersRow } from './OrdersRow'
import { PaginationControls } from '../common/PaginationControls'

export class OrdersTable extends Component {

    render = () =>
        <div>
            <h4 className="bg-info text-white text-center p-2">
                { this.props.totalSize} Orders:
            </h4>
            
            <PaginationControls keys={['ID', 'Name']} {...this.props}></PaginationControls>

            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th className="text-right">Total</th>
                        <th className="text-center">Shipped</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.orders.map((order) => 
                        <OrdersRow key={ order.id} order={order} toggleShiped={() =>
                            this.props.toggleShiped(order.id, !order.shipped)}></OrdersRow>)
                    }
                </tbody>
            </table>
        </div>
}