import React, { Component } from 'react'
import { ValidatedForm } from '../forms/ValidatedForm'

export class Checkout extends Component {
    constructor(props){
        super(props)
        this.defaultAttrs = {type : 'text', required: true}
        this.formModel = [
            { label : 'Name' },
            { label : 'Email', attrs : { type : 'Email'}},
            { label : 'Address'},
            { label : 'City' },
            { label : 'Zip/Postal Code', name : 'zip'},
            { label : 'Country'}
        ]
    }

    handleSubmit = (formData) => {
        const order = {...formData, products: this.props.cart.map((item) => ({
            quanity : item.quanity,
            product_id : item.product.id
        }))}
        
        this.props.placeOrder(order)
        this.props.clearCart()
        this.props.history.push('/shop/thanks')
    }

    handleCancel = () => {
        this.props.history.push('/shop/cart')
    }

    render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">MOTOSTORE</div>
                </div>
            </div>

            <div className="row">
                <div className="col m-2">
                    <ValidatedForm formModel={ this.formModel }
                        defaultAttrs={ this.defaultAttrs }
                        submitCallback={ this.handleSubmit }
                        cancelCallback={ this.handleCancel }
                        submitText="Place order" 
                        cancelText="Return to cart">

                    </ValidatedForm>
                </div>
            </div>
        </div>
    }

}