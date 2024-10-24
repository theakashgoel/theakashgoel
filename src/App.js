
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Counter from './Components/Counter';
// import { useState } from 'react';
import store from './Components/redux/store';
import {Provider} from 'react-redux';
const App = () => {
  

  return (
    <Provider store={store}>
    <div className='main row'>
      <div className='col-5'>
      <ProductList />
      </div>
      <div className='col-2'></div>
      <div className='col-5 cart_content'>
      <Cart />
      </div>
      {/* <Counter /> */}
    </div>
    </Provider>
  );
};

export default App;
