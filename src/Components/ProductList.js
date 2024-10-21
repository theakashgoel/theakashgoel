import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {addToCart} from './redux/action';

const ProductList = () => {
const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const data= await fetch('https://fakestoreapi.com/products')
           const products = setProducts(await data.json());
           return products;
           }
           console.log(products);
           const dispatch = useDispatch();
           useEffect(() => {
             getProducts()
             },[]);

  return (
    <div className='product_list'>
      <h2>Product List</h2>
      {/* <ul> */}
      <div className='row products'>
        {products.map(product => (
          <div className='col-lg-4'>
      <div className='card'>
          <div className='product_details' key={product.id}>
            <img src={product.image} alt={product.title}  width='100px' height='100px'/> <br />
            {product.title} <br />
            ${product.price} <br />
            <button className='add_to_cart' onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        </div>
        </div>
        ))}
      </div>
      {/* </ul> */}
    </div>
  );
};

export default ProductList;