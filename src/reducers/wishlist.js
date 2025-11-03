import {
    TOGGLE_WISHLIST,REMOVE_FROM_WISHLIST } from "../constants/action-types";
import { findIndex } from "../utils/utils";
import { toast } from 'react-toastify';

export default function wishlistReducer(state = {
    list: []
}, action) {
    switch (action.type) {
        case TOGGLE_WISHLIST:
            const productId = action.product.id;

            if (findIndex(state.list, product => product.id === productId) !== -1) {
                const list = state.list.reduce((cartAcc, product) => {
                    if (product.id !== productId) {
                        cartAcc.push(product);
                    } else 
                    toast.error("Item removed from Wishlist");
                    return cartAcc
                }, [])

                return { ...state, list }
            } else
                toast.success("Item added to Wishlist");
                
            return { ...state, list: [...state.list, action.product] }

        case REMOVE_FROM_WISHLIST:
            return {
                list: state.list.filter(item => item.id !== action.productId)
            }

        default:
    }
    return state;
}
