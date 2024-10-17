const cartReducer=(state=[], action)=>{
switch (action.type) {
    case 'ADD_TO_CART':
        return[...state, action.payload]
    case 'REMOVE_FROM_CART':
        let index = state.indexOf(action.payload)
        return[...state, state.splice(index,1) ]
    default:
        return state
}
}

export default cartReducer;