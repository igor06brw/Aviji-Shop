
const shoppingReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_SHOPPING_LIST': 
            {   
                console.log(action.payload, 'IS ADDED');
                state.push(action.payload);
            }
        default:
            return state;
    }
}

export default shoppingReducer;