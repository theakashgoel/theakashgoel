
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
// import { useState } from 'react';
import store from './Components/redux/store';
import {Provider} from 'react-redux';
const App = () => {
  

  return (
    <Provider store={store}>
    <div className='main'>
      <ProductList />
      <Cart />
    </div>
    </Provider>
  );
};

export default App;