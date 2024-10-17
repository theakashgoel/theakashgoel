import React from 'react';
import { useDispatch } from 'react-redux';
import {addToCart} from './redux/action';

const ProductList = () => {

  const dispatch = useDispatch();
  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 50 },
    { id: 4, name: 'Product 4', price: 100 },
  ];

  return (
    <div className='product_list'>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li className='product_data' key={product.id}>
            {product.name} - ${product.price}
            <button className='add_to_cart' onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;