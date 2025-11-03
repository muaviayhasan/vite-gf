import * as types from '../constants/action-types'
import { findIndex } from "../utils/utils";

export default function ( state = {
    newsletter: [],
    current: '1',
    modal: 'login',
    showModal: false
}, action ) {
    switch(action.type) {

        case types.HIDE_NEWSLETTER_MODAL:
            let newsArr = Object.assign([], state.newsletter);

            if ( 0 === newsArr.length || -1 === findIndex( newsArr, item => item === action.demo ) )
                newsArr.push( action.demo );

            return { 
                ...state, 
                newsletter: newsArr 
            }

        case types.SHOW_MODAL:
            return {
                ...state,
                showModal: true,
                modal: action.modal
            }

        case types.CLOSE_MODAL:
            return {
                ...state,
                showModal: false,
                modal: action.modal
            }

        case types.CHANGE_DEMO:
            return {
                ...state, 
                current: action.demo 
            }
        
        default:
            return state;
    }
}
