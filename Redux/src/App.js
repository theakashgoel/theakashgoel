
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Counter from './Components/Counter';
// import { useState } from 'react';
import store from './Components/redux/store';
import {Provider} from 'react-redux';
const App = () => {
  let b=100
  {
    var a=10;
    let b=10;
    const c=10;
    console.log(a); //10
    console.log(b); //10
    console.log(c); //10
  }

  console.log(a); //10
  console.log(b); //100
  // console.log(c); //10

  return (
    <Provider store={store}>
    <div className='main row'>
      {/* <div className='col-5'>
      <ProductList />
      </div>
      <div className='col-2'></div>
      <div className='col-5 cart_content'>
      <Cart />
      </div> */}
      <Counter />
    </div>
    </Provider>
  );
};

export default App;
