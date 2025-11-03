import * as api from '../api'
// import blog from '../api/post'
import * as types from '../constants/action-types'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


/************** Post Action *************/
// receive posts
export const receivePosts = posts => ({
    type: types.RECEIVE_POSTS,
    posts
});

// get all posts
export const getAllPosts = () => dispatch => {
    api.getPosts().then(posts => {
        dispatch(receivePosts(posts));
        return posts;
    })
}


/********** Product Action ********/
// recieve products
export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
});

// get all products
export const getAllProducts = () => dispatch => {
    api.getProducts().then(products => {
        dispatch(receiveProducts(products));
        return products;
    })
}

/*********** Modal related Action **********/
// display quickview 
export const showQuickViewModal = productId => ({
    type: types.SHOW_QUICKVIEW,
    productId
})

// close quickview modal
export const closeQuickViewModal = () => ({
    type: types.CLOSE_QUICKVIEW
})

// Show Video & Login modal
export const showModal = (modal) => ({
    type: types.SHOW_MODAL,
    modal: modal
});

// close Video & Login modal
export const closeModal = (modal) => ({
    type: types.CLOSE_MODAL,
    modal: modal
});

/************ Cart Action **************/
// add item to cart
export const addToCart = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))
}

// add item to cart from wishlist
export const addToCartFromWishlist = (product, qty) => (dispatch) => {
    toast.success("Item added to Cart");

    dispatch({
        type: types.REMOVE_FROM_WISHLIST,
        productId: product.id
    })

    dispatch(addToCartUnsafe(product, qty))
}

// add item to cart : typical action
export const addToCartUnsafe = (product, qty) => ({
    type: types.ADD_TO_CART,
    product,
    qty
});

// remove item from cart
export const removeFromCart = productId => (dispatch) => {
    toast.error("Item removed from Cart");
    dispatch({
        type: types.REMOVE_FROM_CART,
        productId
    })
};

//change item's qty
export const changetQty = (productId, qty) => ({
    type: types.CHANGE_QTY,
    productId,
    qty
});

//change shipping method
export const changeShipping = (shipping) => ({
    type: types.CHANGE_SHIPPING,
    shipping
})
//
/*********** Wishlist Action *********/

// add item to wishlist
export const toggleWishlist = (product) => (dispatch) => {
    dispatch(toggleWishlistUnsafe(product))
}

//add item to wishlist : typical action
export const toggleWishlistUnsafe = (product) => ({
    type: types.TOGGLE_WISHLIST,
    product
});

// remove item from wishlist
export const removeFromWishlist = productId => (dispatch) => {
    toast.error("Item removed from Wishlist");
    dispatch({
        type: types.REMOVE_FROM_WISHLIST,
        productId
    })
};


/************* Compare Action ***********/
//CompareList
export const addToCompare = (product) => (dispatch) => {
    toast.success("Item added to Compare");
    dispatch(addToCompareUnsafe(product))
}

export const addToCompareUnsafe= (product) => ({
    type: types.ADD_TO_COMPARE,
    product
});

export const removeFromCompare = productId => ({
    type: types.REMOVE_FROM_COMPARE,
    productId
});

export const resetCompare = () => ({
    type: types.RESET_COMPARE
});


/************ Overlay Action ***********/
export const innerLoadBegin = (container) => ({
    type: types.INNER_LOADING,
    loading: true
});

export const innerLoadEnd = (container) => ({
    type: types.INNER_LOADING,
    loading: false
});

export const outerLoadBegin = () => ({
    type: types.OUTER_LOADING,
    loading: true
});

export const outerLoadEnd = () => ({
    type: types.OUTER_LOADING,
    loading: false
});

export const innerLoading = () => (dispatch) => {
    dispatch(innerLoadBegin());

    setTimeout(() => {
        dispatch(innerLoadEnd());
    }, 1000);
};

export const outerLoading = () => (dispatch) => {
    dispatch(outerLoadBegin());

    setTimeout(() => {
        dispatch(outerLoadEnd());
    }, 1000);
}


/************** Filter Action ***********/

export const filterSort = (sortBy) => (dispatch) => {
    dispatch(innerLoading());
    dispatch ({
        type: types.SORT_BY,
        sortBy
    })
}

export const filterPrice = (range) => (dispatch) => {
    dispatch(innerLoading());
    dispatch({
        type: types.PRICE_FILTER,
        range
    })
}

export const toggleCategoryFilter = (category) => (dispatch) => {
    dispatch(innerLoading());
    dispatch ({
        type: types.CATEGORY_FILTER,
        category
    })
}

export const toggleSizeFilter = (size) => (dispatch) => {
    dispatch(innerLoading());
    dispatch ({
        type: types.SIZE_FILTER,
        size
    })
}

export const toggleColorFilter = (color) => (dispatch) => {
    dispatch(innerLoading());
    dispatch ({
        type: types.COLOR_FILTER,
        color
    })
}

export const toggleBrandFilter = (brand) => (dispatch) => {
    dispatch(innerLoading());
    dispatch ({
        type: types.BRAND_FILTER,
        brand
    })
}

export const toggleRatingFilter = (rating) => (dispatch) => {
    dispatch(innerLoading());
    dispatch ({
        type: types.RATING_FILTER,
        rating
    })
}

export const resetFilter = () => (dispatch) => {
    dispatch(innerLoading());
    dispatch ({
        type: types.RESET_FILTER
    })
}

/************** Newsletter Modal ************/
export const hideNewsletterModal = ( demo ) => ({
    type: types.HIDE_NEWSLETTER_MODAL,
    demo
})


/************** Demo  **********************/
export const changeDemo = ( demo ) => ({
    type: types.CHANGE_DEMO,
    demo
})