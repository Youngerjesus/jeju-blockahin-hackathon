import {
    LOGIN,
    LOGOUT,
    INTEGRATE_WALLET,
    REMOVE_WALLET,
    ACCOUNT_KEY
} from '../actions/actionTypes';

const initialState = {
    isLoggedIn: !!sessionStorage.getItem('accountKey'),
    accountKey: null,
    address: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            }
        case ACCOUNT_KEY:
            return {
                ...state,
                accountKey: action,
                address: action.payload.address,
            }
        case REMOVE_WALLET:
            return {
                ...state,
                accountKey: null,
                address: null,
            }
        default:
            return state
    }
}

export default authReducer
