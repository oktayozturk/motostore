import React, { Component, lazy, Suspense } from 'react'
import { MotoStoreDataStore } from './data/DataStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ShopConnector } from './shop/ShopConnector'
// import { Admin } from './admin/Admin'
import { AuthProviderImpl } from './auth/AuthProviderImpl'

const Admin = lazy(() => import('./admin/Admin'))

class App extends Component {
  render(){
    return <Provider store={MotoStoreDataStore}>
      <AuthProviderImpl>
      <Router>
        <Switch>
          
          <Route path="/shop" component={ShopConnector} />
          
          <Route path="/admin" render={(routeProps) =>
                <Suspense fallback={ <h3>Loading...</h3>}>
                  <Admin {...routeProps}></Admin>
                </Suspense>
          }></Route>
          
          <Redirect to="/shop"></Redirect>
        
        </Switch>
      </Router>
      </AuthProviderImpl>
    </Provider>

  }
}


export default App;
