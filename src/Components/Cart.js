import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart} from './redux/action';
const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  console.log(cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index))
  }
  return (
    <>
     <div className='product_list'>
      <h2>Shopping Cart</h2>
      <div className='row products'>
        {cart.map((item, index) => (
          <div className='col-lg-4'>
          <div className='card'>
              <div className='product_details' key={item.id+'_'+index}>
                <img src={item.image} alt={item.title}  width='100px' height='100px'/> <br />
                {item.title} <br />
                ${item.price} <br />
                <button className='add_to_cart' onClick={() => handleRemoveFromCart(index)}><MdDeleteForever />Remove from cart</button>
                </div>
            </div>
            </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Cart;