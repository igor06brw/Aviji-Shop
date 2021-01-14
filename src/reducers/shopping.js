
const shoppingReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_SHOPPING_LIST': 
                return [...state, action.payload];
        case 'REMOVE_FROM_SHOPPING_LIST': 
                return  state.filter(e => { return e.id !== action.payload.id} )
        default:
            return state;
    }
}

export default shoppingReducer;