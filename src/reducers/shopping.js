
const initialState = [
    {id: 0, type: 't-shirt', name: 'T-shirt with Batman', favourite: false, quantity: 2, price: 1.10, image: '/images/tshirt_1.jpg'},
    {id: 5, type: 'shirt', name: 'Shirt with dots', favourite: true, quantity: 5, price: 53, image: '/images/shirt_1.jpg'},
    {id: 8, type: 't-shirt', name: 'T-shirt Atari', favourite: true, quantity: 1, price: 32.45, image: '/images/tshirt_4.jpg'}
]


const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': 
            return state.push({
                ...state, 
                state: action.payload
            });
        default:
            return state;
    }
}

export default shoppingReducer;