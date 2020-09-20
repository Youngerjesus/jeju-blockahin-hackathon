import { getWallet } from '../../utils/crypto';
import ui from '../../utils/ui';
import { feedParser } from '../../utils/misc';
import { SET_FEED } from './actionTypes'
import axios from 'axios';

// Action creators
const setFeed = (feed) => ({
    type: SET_FEED,
    payload: { feed },
})

const updateFeed = (tokenId) => (dispatch, getState) => {

}

const updateOwnerAddress = (tokenId, to) => (dispatch, getState) => {
    const { photos: { feed } } = getState()

}


// API functions
export const getFeed = () => (dispatch) => {

}

export const uploadPhoto = (
    file,
    fileName,
    location,
    caption,
    shareAddress,
    memoryData,
    myAddress
) => (dispatch) => {
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
        const buffer = Buffer.from(reader.result)
        const hexString = "0x" + buffer.toString('hex')

        axios.post('/c/updatePhoto',{
            file:hexString,
            fileName,
            location,
            caption,
            shareAddress,
            memoryData,
            myAddress
        }).then((response) => {

        });
    }
}

export const transferOwnership = (tokenId, to) => (dispatch) => {

}
