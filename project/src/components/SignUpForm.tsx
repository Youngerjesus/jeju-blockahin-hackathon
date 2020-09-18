import React, { Component } from 'react'
import caver from '../klaytn/caver'
import Input from './Input';
import Button from './Button';

import './SignUpForm.scss';

interface IProps{

}

interface IState{

}
class SignupForm extends React.Component<IProps, IState> {
    state = {
        privateKey: null,
    }

    generatePrivateKey = () => {
        const { privateKey } = caver.klay.accounts.create();
        this.setState({ privateKey })
    }

    render() {
        const { privateKey } = this.state

        return (
            <div className="SignupForm">
                <Input
                    className="SignupForm__input"
                    placeholder="Generate Private Key to Sign up"
                    value={privateKey || ''}
                    label="Parents & Couple Private key"
                    readOnly
                />
                <Input
                    className="SignupForm__input"
                    placeholder="Generate Private Key to Sign up"
                    value={privateKey || ''}
                    readOnly
                />
                <Button
                    className="SignupForm__button"
                    title="Generate Private key"
                    onClick={this.generatePrivateKey}
                />
            </div>
        )
    }
}

export default SignupForm
