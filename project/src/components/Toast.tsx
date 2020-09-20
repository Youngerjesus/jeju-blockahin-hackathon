import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { KLAYTN_SCOPE } from '../constants/url';
import ui from '../utils/ui';
import LinkNewTab from './LinkNewTab';
import IconButton from './IconButton';
import './Toast.scss'
import styled from "styled-components";
import io from 'socket.io-client';
import {showModal} from '../redux/actions/ui';
import axios from 'axios';

const EventEmitter = require('events').EventEmitter;
const myEventEmitter = new EventEmitter();

const socket = io.connect('localhost:5000');


const SignNotification = (dispatch:any) => {
    socket.on('signEvent', (payload:any) => {
        console.log("signEvent");

        const content = {
            message: `Transaction Id: ${payload.transactionId}`,
            data: payload.transactionId,
            status: 'pending',
            link: ''
        }

        console.log(payload.transactionId);

        return dispatch(showModal(content))
    });


    myEventEmitter.on('connectLogin', (address:string)=> {
        socket.on(address,(payload:any) => {
            console.log("successEvent");

            const content = {
                message: `${payload.address} sign success!!`,
                status: 'success',
                data: payload.transactionId,
                link: ''
            }

            return dispatch(showModal(content))
        });
    });
};

class Toast extends Component {

    processingMessage(payload:any){
        if(payload){
             return {
                status: payload.status,
                message: payload.message,
                link: payload.link,
                data: payload.data
            };
        }
        return  null;
    }

    sign(notification:any, address:any){
        axios.post('/c/sign',{
            transactionId: notification.data,
            address: address
        });
    }

    render() {
        let { toast,address }:any = this.props
        let notification = this.processingMessage(toast.modal);

        if(!address){
            address = window.location.pathname.split('detail/')[1];
        }

        if(address){
            myEventEmitter.emit('connectLogin', address);
        }

        let ToastBox = <PendingBox> </PendingBox>;
        console.log(address);
        // @ts-ignore
        if(notification && notification.status === 'success'){
            ToastBox = <SuccessBox> </SuccessBox>
        }

        return notification && (
            // @ts-ignore
            <div
                className={cx('Toast', {
                    'Toast__pending': notification.status === 'pending',
                    'Toast--success': notification.status === 'success',
                    'Toast__status--fail': notification.status === 'fail',
                    'Toast__status--error': notification.status === 'error',
                })}
                key={new Date().getTime()}
            >
                <div
                    className={cx('Toast__status', {
                        'Toast__status--pending': notification.status === 'pending',
                        'Toast__status--success': notification.status === 'success',
                        'Toast__status--fail': notification.status === 'fail',
                        'Toast__status--error': notification.status === 'error',
                    })}
                >
                    {notification.status}
                </div>
                <p className="Toast__message">{notification.message}
                    <SignButton onClick={()=> {this.sign(notification, address)}}> Sign </SignButton>
                </p>
                {
                    toast.link &&
                    <LinkNewTab
                        className="Toast__txHash Toast__txHash--link"
                        link={`${KLAYTN_SCOPE}tx/${notification.link}`}
                        title={`${notification.link}`}
                    />
                }
                <IconButton
                    className="Toast__close"
                    icon="icon-close.png"
                    alt="close toast"
                    onClick={ui.hideToast}
                />
            </div>
        )
    }
}

const SignButton = styled.button`
    padding: 3px 5px;
    font-size: 10px;
    font-weight: bold;
    line-height: 1;
    border-radius: 3px;
    color: #4f473e;
    background-color: #ffffff;
    position: absolute;
    top: 40px;
    right: 15px;
    width:50px;
    height:25px;
    cursor:pointer;
`;

const SuccessBox = styled.div`
    position: fixed;
    top: 100px;
    right: 30px;
    width: 400px;
    padding: 22px 24px;
    z-index: 10;
    border-radius: 3px;
    color: #ffffff;
    background-color: : aquamarine;
    opacity: 0;
    animation: showToast 10s;
`;

const PendingBox = styled.div`
    position: fixed;
    top: 100px;
    right: 30px;
    width: 400px;
    padding: 22px 24px;
    z-index: 10;
    border-radius: 3px;
    color: #ffffff;
    background-color: rgba(79, 71, 62, 0.9);
    opacity: 0;
    animation: showToast 10s;
`;
const mapStateToProps = (state:any) => ({
    toast: state.ui,
    address: state.auth.address
});

const mapDispatchToPros = (dispatch:any) => {
    return SignNotification(dispatch);
}

export default connect(mapStateToProps,mapDispatchToPros)(Toast)
