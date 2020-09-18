import React from "react";
import styled from "styled-components";
import { isValidPrivateKey } from '../utils/crypto';
import Input from '../components/Input';
import Button from '../components/Button';
import './LoginForm.scss'
import {RouteComponentProps} from 'react-router-dom';
interface IProps {
    history: any
}

interface IState{
    privateKey: string,
    warningMessage: string,
}
export class LoginForm extends React.Component<IProps, IState> {

    constructor(props:IProps) {
        super(props);
        this.state = {
            privateKey: '',
            warningMessage: '',
        }
    }

    handleChange = (e:any) => {
        // @ts-ignore
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleLogin = () => {
        // @ts-ignore
        const { login } = this.props
        const { privateKey } = this.state

        this.props.history.push("/detail");

        isValidPrivateKey(privateKey)
            ? login(privateKey)
            : this.setState({ warningMessage: '* Invalid Private Key' })
    }

    render() {
        const { warningMessage } = this.state
        return (
            <div className="LoginForm">
                <Input
                    className="LoginForm__input"
                    type="password"
                    name="privateKey"
                    label="Login with Private Key"
                    placeholder="0x2c4078447..."
                    onChange={this.handleChange}
                    err={warningMessage}
                />
                <Button
                    className="LoginForm__button"
                    title="Log in"
                    onClick={this.handleLogin}
                />
            </div>
        )
    }
}