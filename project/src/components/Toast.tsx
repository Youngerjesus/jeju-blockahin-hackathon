import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { KLAYTN_SCOPE } from '../constants/url';
import ui from '../utils/ui';

import LinkNewTab from './LinkNewTab';
import IconButton from './IconButton';

import './Toast.scss'
import styled from "styled-components";

class Toast extends Component {
    render() {
        let { toast }:any = this.props

        toast = {
            status: 'pending',
            message: 'message',
            Link: ''
        };

        return toast && (
            <div
                className="Toast"
                key={new Date().getTime()}
            >
                <div
                    className={cx('Toast__status', {
                        'Toast__status--pending': toast.status === 'pending',
                        'Toast__status--success': toast.status === 'success',
                        'Toast__status--fail': toast.status === 'fail',
                        'Toast__status--error': toast.status === 'error',
                    })}
                >
                    {toast.status}
                </div>
                <p className="Toast__message">{toast.message}

                    <SignButton> Sign </SignButton>
                </p>
                {
                    toast.txHash &&
                    <div className="Toast__txHash">
                        {toast.txHash}
                    </div>
                }
                {
                    toast.link &&
                    <LinkNewTab
                        className="Toast__txHash Toast__txHash--link"
                        link={`${KLAYTN_SCOPE}tx/${toast.link}`}
                        title={`${toast.link}`}
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


const mapStateToProps = (state:any) => ({
    toast: state.ui.toast,
})

export default connect(mapStateToProps)(Toast)
