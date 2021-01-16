
const shoppingReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_SHOPPING_LIST': 
                return [...state, action.payload];
        case 'REMOVE_FROM_SHOPPING_LIST': 
                {
                        const index = state.findIndex((i) => i.id === action.payload.id);
                        state.splice(index, 1);
                        return [...state];
                }
        default:
            return state;
    }
}

export default shoppingReducer;