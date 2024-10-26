import { ADD_TO_CART, REMOVE_FROM_CART } from './action';
const initialState={
    items:[]
}
const cartReducer=(state = initialState, action)=>{
switch (action.type) {
    case ADD_TO_CART:
        return{...state, items:[...state.items, action.payload]}
    case REMOVE_FROM_CART:
        // let index = state.indexOf(action.payload)
        return{...state, items:state.items.filter((ele, index) => index!== action.payload)}
    default:
        return state
}
}

export default cartReducer;