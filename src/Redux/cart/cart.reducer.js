import CartActionTypes from './cart.types';
import { AddItemToCart, RemoveItem } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                //cartItems: [...state.cartItems, action.payload]
                cartItems: AddItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: RemoveItem(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    item => item.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}

export default CartReducer;