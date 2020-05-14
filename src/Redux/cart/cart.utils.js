export const AddItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        echCartItem => echCartItem.id === cartItemToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map(item =>
            item.id === cartItemToAdd.id ?
                { ...item, quantity: item.quantity + 1 } :
                item
        );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const RemoveItem = (cartItems, cartItemToRemove) => {
    console.log(cartItemToRemove);
    const existingCartItem = cartItems.find(
        echItem => echItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity !== 1) {
        return cartItems.map(
            cartItem => (
                cartItem.id === cartItemToRemove.id ?
                    { ...cartItem, quantity: cartItem.quantity - 1 } :
                    cartItem
            )
        )
    }
    else {
        return cartItems;
    }
}