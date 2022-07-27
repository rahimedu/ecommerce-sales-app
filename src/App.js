import React from 'react';
import NavComponent from './Pages/Navbar';
import Cart from './Pages/cart'
import Product from './Pages/product'
import productDetails from './Pages/productDetails'
import Home from './Pages/home' 
import NotFound from './Pages/nofound'
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
import store from './Api/store'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <NavComponent />
      <Switch>
        <Route exact path="/ReactEcommerce" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={productDetails} />
        <Route  component={NotFound} />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
