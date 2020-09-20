import React,{Fragment} from "react";
import styled from "styled-components";

import caver from '../klaytn/caver';
import Input from './Input';

import './WalletInfo.scss';
import PrivateKeyInput from "./PrivateKeyInput";
import {connect} from "react-redux";
import * as authActions from "../redux/actions/auth";

interface IProps{}

interface IState{}

const WalletModalDetail = class WalletModalDetail extends React.Component<IProps, IState>{
    state = {
        balance: '0',
        address: '',
    }

    componentDidMount() {
    }

    render() {
        console.log(this.props);

        return (
            <Fragment>
                <Header> Wallet Info </Header>
                <div className="WalletInfo">
                    {/*// @ts-ignore*/}
                    <PrivateKeyInput
                        className="WalletInfo__privateKey"
                        name="privateKey"
                        label="Wallet Address"
                        value="0x"
                    />

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

export default connect(null, null)(WalletModalDetail);


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
