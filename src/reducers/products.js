import { RECEIVE_PRODUCTS, SHOW_QUICKVIEW, CLOSE_QUICKVIEW } from "../constants/action-types";
import { findIndex } from "../utils/utils";


const initialState = {
    products: [],
    productDetail: [],
    quickView: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return { ...state,
                products: action.products };

        case SHOW_QUICKVIEW:
            let index = findIndex(state.products, product=> product.id === action.productId);
            if( -1 !== index ) {
                const item = state.products[index];
                return { 
                    ...state, 
                    quickView: true, 
                    productDetail: item 
                };
            }
            break;

        case CLOSE_QUICKVIEW:
            return { ...state, quickView: false};

        default:
            return state;
    }
};
export default productReducer;