import caver from '../../klaytn/caver'
import {
    LOGIN,
    LOGOUT,
    INTEGRATE_WALLET,
    REMOVE_WALLET,
    ACCOUNT_KEY
} from './actionTypes'

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

