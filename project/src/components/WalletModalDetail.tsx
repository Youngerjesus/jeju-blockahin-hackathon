import React,{Fragment} from "react";
import styled from "styled-components";

import caver from '../klaytn/caver';
import Input from './Input';

import './WalletInfo.scss';
import PrivateKeyInput from "./PrivateKeyInput";

interface IProps{}

interface IState{}

export default class WalletModalDetail extends React.Component<IProps, IState>{
    state = {
        balance: '0',
    }

    componentDidMount() {
    }

    render() {
        return (
            <Fragment>
                <Header> Wallet Info </Header>
                <div className="WalletInfo">

                    <PrivateKeyInput
                        className="WalletInfo__privateKey"
                        name="privateKey"
                        label="Wallet PrivateKey"
                        value="0x"
                        readOnly/>

                    <PrivateKeyInput
                        className="WalletInfo__privateKey"
                        name="privateKey"
                        label="Wallet PrivateKey"
                        value="0x"
                        readOnly/>

                    <Input
                        className="WalletInfo__address"
                        name="address"
                        label="Wallet Address"
                        value="0x"
                        readOnly/>

                    <Input
                        className="WalletInfo__balance"
                        name="balance"
                        label="Balance"
                        value={`${this.state.balance} KLAY`}
                        readOnly/>

                    <p className="WalletInfo__faucet">
                        If you need small amount of Klay for testing.
                        <a
                            className="WalletInfo__link"
                            href="#"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Run Klay Faucet
                        </a>
                    </p>
                </div>
            </Fragment>
        )
    }
}

const Header = styled.header`
    display:flex;
    width:100%;
    height: 60px;
    font-weight: bold;
    line-height: 1;
    color: #999999;
    justify-content: center;
    align-items: center;
`;
