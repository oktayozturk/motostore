
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import * as ShopActions from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "../shop/Shop";
import * as CartActions from "../data/CartActionCreators";
import { CartDetails } from "../shop/CartDetails";
import { DataGetter } from "../data/DataGetter";
import { Checkout } from "../shop/Checkout";
import { Thanks } from "../shop/Thanks";


const mapDispatchToProps = { ...ShopActions, ...CartActions};

export const ShopConnector = connect(ds => ds, mapDispatchToProps)(
    class extends Component {

        selectComponent = (routeProps) => {
            const wrap = (Component, Content) =>
                <Component {...this.props} {...routeProps}>
                    { Content && wrap(Content) }
                </Component>

            switch (routeProps.match.params.section) {
                case 'products':
                    return wrap(DataGetter, Shop)
                case 'cart':
                    return wrap(CartDetails)
                case 'checkout':
                    return wrap(Checkout)
                case 'thanks':
                    return wrap(Thanks)
                default:
                    return <Redirect to="/shop/products/all/1"></Redirect>
            }
        }

        render() {
            return <Switch>
                <Redirect from="/shop/products/:category" 
                    to="/shop/products/:category/1" exact={ true } />        
                
                <Route path={'/shop/:section?/:category?/:page?'} render={(routeProps) =>
                    this.selectComponent(routeProps)
                } />

                {/* <Route path={ "/shop/products/:category/:page?"}
                    render = { (routeProps) => 
                        <DataGetter {...this.props} {...routeProps}>
                            <Shop {...this.props} {...routeProps}></Shop>
                        </DataGetter>
                    } />

                <Route path={ "/shop/cart"} render={(routeProps) => 
                    <CartDetails {...this.props} {...routeProps}></CartDetails>
                } />

                <Route path="/shop/checkout" render={(routeProps) =>
                    <Checkout {...this.props} {...routeProps}></Checkout>
                    } />
                
                <Route path="/shop/thanks" render={(routeProps) => 
                    <Thanks {...this.props} {...routeProps}></Thanks>
                }/>

                <Redirect to="/shop/products/all/1"></Redirect> */}
                  
            </Switch>          
        }

        componentDidMount = () => this.props.loadData(DataTypes.CATEGORIES);
    }
)