
const shoppingReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_SHOPPING_LIST': 
                return [...state, action.payload];
        case 'REMOVE_FROM_SHOPPING_LIST': 
                {
                        state.splice(state.findIndex( obj => obj.id === action.payload.id ), 1)
                        return [...state];
                }
        default:
            return state;
    }
}

export default shoppingReducer;