export const addToShoppingList = (el) => ({
    type: 'ADD_TO_SHOPPING_LIST',
    payload: el
});

export const removeFromShoppingList = (el) => ({
    type: 'REMOVE_FROM_SHOPPING_LIST',
    payload: el
})