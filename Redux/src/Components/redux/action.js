export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

const removeFromCart = (index) => ({
    type: 'REMOVE_FROM_CART',
    payload: index,
  });

export { addToCart, removeFromCart };