import { INNER_LOADING, OUTER_LOADING } from '../constants/action-types'

export default function overlayReducer( state = {
    isInnerLoading: false,
    isOuterLoading: false,
    type: 'outer'
}, action ) {
    switch(action.type){
        case INNER_LOADING:
            return {
                ...state,
                isInnerLoading: action.loading,
                type: 'inner'
            }
        
        case OUTER_LOADING:
            return {
                ...state,
                isOuterLoading: action.loading,
                type: 'outer'
            }
            
        default: 
            return state;
    }
}
