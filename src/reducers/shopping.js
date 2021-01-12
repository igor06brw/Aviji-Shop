
const shoppingReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_SHOPPING_LIST': 
                return [...state, action.payload];
        case 'REMOVE_FROM_SHOPPING_LIST':
                let isDeleted = false;
                return [...state.slice(state.filter(item => {
                    (item.id !== action.payload.id && !isDeleted) ? isDeleted = true : console.log('x'); 
                    
                }), 1)]

                return [...state.splice()]
        default:
            return state;
    }
}

export default shoppingReducer;