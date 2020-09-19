import React, { Component } from 'react'
import caver from '../klaytn/caver'
import Input from './Input';
import Button from './Button';
import { connect } from 'react-redux'
import './SignUpForm.scss';
import axios from "axios";
import * as authActions from '../redux/actions/auth';

interface IProps{
    history: any
}

interface IState{

}
class SignupForm extends React.Component<IProps, IState> {
    state = {
        accountKey: null,
    }

    generateAccountKey = async () => {
        axios.get('/api/newAccount')
            .then(response => {
                console.log(response);
                if(response.status === 200){
                    const accountKey = response.data.address;
                    this.setState({ accountKey });

                    const { login }:any = this.props

                    login(accountKey);

                    setTimeout(() => {
                        this.props.history.push(`/detail/${accountKey}`);
                    },1000)
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { accountKey } = this.state

        return (
            <div className="SignupForm">
                <Input
                    className="SignupForm__input"
                    placeholder="Generate Account Key to Sign up"
                    value={accountKey || ''}
                    label="Account key"
                    readOnly
                />

                <Button
                    className="SignupForm__button"
                    title="Generate Account key"
                    onClick={this.generateAccountKey}
                />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch:any) => ({
    login: (accountKey:any) => dispatch(authActions.login(accountKey)),
})

export default connect(null, mapDispatchToProps)(SignupForm)

