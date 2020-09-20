import {
    LOGIN,
    LOGOUT,
    INTEGRATE_WALLET,
    REMOVE_WALLET,
    ACCOUNT_KEY, DISMISS, UPDATE
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
        case DISMISS:
            return {
                ...state,
                accountKey: '0x',
                address: '0x'
            }
        case UPDATE:
            console.log(action);
            return{
                ...state,
                accountKey:action.address,
                address: action.address
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
