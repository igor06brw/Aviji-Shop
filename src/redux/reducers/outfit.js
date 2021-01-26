const outfitReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_OUTFITS': 
            return action.payload
        default:
            return state;
    }
}

export default outfitReducer