import React from 'react'
import styled from "styled-components";
// @ts-ignore
import cx from 'classnames'

import './Input.scss'

const PrivateKeyInput = ( {
                    className,
                    type,
                    name,
                    label,
                    value,
                    onChange,
                    placeholder,
                    err,
                    readOnly,
                }:any) => (

    <div className={cx('Input', className)}>
        {
            label &&
            <label className="Input__label" htmlFor={name}>
                {label}
            </label>
        }

        <input
            id={name}
            type={type || 'text'}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
            className={cx(
                'Input__input',
                { 'Input__input--err': err },
            )}
            autoComplete="off"
        />
        {
            err &&
            <p className="Input__err">{err}</p>
        }

        <ButtonBox>
            <UpdateButton> Update </UpdateButton>
            <DismissButton> Dismiss </DismissButton>
        </ButtonBox>
    </div>
)

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

export default PrivateKeyInput
