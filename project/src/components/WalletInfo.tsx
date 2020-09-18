import React, { Component } from 'react'
import caver from "../klaytn/caver";
import Input from "./Input"
import './WalletInfo.scss'

class WalletInfo extends Component {
    state = {
        balance: '0',
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="WalletInfo">
                <Input
                    className="WalletInfo__address"
                    name="address"
                    label="Wallet Address"
                    value={0}
                    readOnly
                />
                <Input
                    className="WalletInfo__balance"
                    name="balance"
                    label="Balance"
                    value={`${this.state.balance} KLAY`}
                    readOnly
                />
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
        )
    }
}


export default WalletInfo
