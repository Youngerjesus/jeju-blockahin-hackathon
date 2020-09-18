import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isValidAddress } from '../utils/crypto';
import Input from './Input';
import Button from './Button';

import './TransferOwnership.scss';

class TransferOwnership extends Component {
    state = {
        to: null,
        warningMessage: '',
    }

    handleInputChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e:any) => {
        e.preventDefault()
        const { id, transferOwnership } :any = this.props
        const { to } = this.state

        if (!isValidAddress(to)) {
            return this.setState({
                warningMessage: '* Invalid wallet address',
            })
        }
        transferOwnership(id, to)
    }

    render() {
        const { id, issueDate, currentOwner } : any= this.props
        return (
            <div className="TransferOwnership">
                <h3 className="TransferOwnership__copyright">Copyright. {id}</h3>
                <p className="TransferOwnership__issueDate">Issue Date  {issueDate}</p>
                <form className="TransferOwnership__form" onSubmit={this.handleSubmit}>
                    <Input
                        className="TransferOwnership__from"
                        name="from"
                        label="Current Owner"
                        value={currentOwner}
                        readOnly
                    />
                    <Input
                        className="TransferOwnership__to"
                        name="to"
                        label="New Owner"
                        onChange={this.handleInputChange}
                        placeholder="Transfer Ownership to..."
                        err={this.state.warningMessage}
                        required
                    />
                    <Button
                        type="submit"
                        title="Transfer Ownership"
                    />
                </form>
            </div>
        )
    }
}


export default TransferOwnership;
