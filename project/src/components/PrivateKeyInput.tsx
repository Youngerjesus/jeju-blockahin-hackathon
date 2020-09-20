import React from 'react'
import styled from "styled-components";
// @ts-ignore
import cx from 'classnames'
import {connect} from "react-redux";

import './Input.scss'
import * as authActions from "../redux/actions/auth";

const mapDispatchToProps = (dispatch:any) => ({
    dismiss: (accountKey:any) => dispatch(authActions.dismiss()),
    update: (accountKey:any)  => dispatch(authActions.update())
})

const mapStateToProps = (state:any) => ({
    accountKey: state.auth.address ? state.auth.address : '0x'
});

interface IProps{
    // @ts-ignore
    accountKey:any
    className:any
    label: any
    name:any
    value:any
    dismiss: any,
    update: any
}
const PrivateKeyInput = class PrivateKeyInput extends React.Component<IProps, any>{
    constructor(props:IProps) {
        super(props);
    }

    render() {
        const {
            className,
            name,
            value,
            label,
            dismiss,
            update,
            accountKey
        } = this.props;

        return (
            <div className={cx('Input', className)}>
                {
                    label &&
                    <label className="Input__label" htmlFor={name}>
                        {label}
                    </label>
                }

                <input
                    id={name}
                    type={'text'}
                    name={name}
                    value={accountKey}
                    placeholder={'0x'}
                    readOnly={true}
                    className={cx(
                        'Input__input',
                    )}
                    autoComplete="off"
                />

                <ButtonBox>
                    <UpdateButton onClick={update}> Update </UpdateButton>
                    <DismissButton onClick={dismiss}> Dismiss </DismissButton>
                </ButtonBox>
            </div>
        );
    }
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(PrivateKeyInput);

const ButtonBox = styled.div`
    display:flex; 
    justify-content: flex-end;
    position: absolute;
    top: 37px;
    left: 390px;
` ;
const UpdateButton = styled.button`
    display:flex;
    color: #fff;
    background: #28a745;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    justify-content: center;
    height: 40px;
    width: 80px;
    align-items: center;
`;

const DismissButton = styled.button`
    display:flex; 
    color: #fff;
    background: #dc3545;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    justify-content: center;
    height: 40px;
    width: 80px;
    align-items: center;
`;
