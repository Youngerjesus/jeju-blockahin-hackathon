import caver from '../../klaytn/caver'
import {
    LOGIN,
    LOGOUT,
    INTEGRATE_WALLET,
    REMOVE_WALLET,
    DISMISS,
    UPDATE,
    ACCOUNT_KEY
} from './actionTypes'
import axios from "axios";

export const integrateWallet = (accountKey) => (dispatch) => {
    // const walletInstance = caver.klay.accounts.privateKeyToAccount(privateKey)
    // caver.klay.accounts.wallet.add(walletInstance)
    sessionStorage.setItem('accountKey', JSON.stringify(accountKey))
    return dispatch({
        type: ACCOUNT_KEY,
        payload: {
            accountKey,
            address: accountKey,
        },
    })
}

export const removeWallet = () => (dispatch) => {
    caver.klay.accounts.wallet.clear()
    sessionStorage.removeItem('walletInstance')
    return dispatch({
        type: REMOVE_WALLET,
    })
}

export const login = (accountKey) => (dispatch) => {
    console.log('login');
    dispatch(integrateWallet(accountKey))
    return dispatch({
        type: LOGIN,
    })
}

export const logout = () => (dispatch) => {
    dispatch(removeWallet())
    return dispatch({
        type: LOGOUT,
    })
}

export const update = () => (dispatch) => {
    // axios call
    axios.get('/c/newAccount')
        .then(response => {
            console.log(response);
            if(response.status === 200) {
                const accountKey = response.data.address;
                dispatch({
                    address:accountKey,
                    type:UPDATE
                })
            }
    });
}


export const dismiss = () => (dispatch) => {
    return dispatch({
        type: DISMISS
    })
}

