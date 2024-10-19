import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart} from './redux/action';
const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  console.log(cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId))
  }
  return (
    <div>
      
     { cart &&
     <>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button className='add_to_cart' onClick={() => handleRemoveFromCart(item.id)}><MdDeleteForever /></button>
          </li>
        ))}
      </ul>
      </>
      }
    </div>
  );
};

export default Cart;