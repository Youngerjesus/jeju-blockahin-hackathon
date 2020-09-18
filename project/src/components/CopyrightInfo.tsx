import React, { Component } from 'react';

// @ts-ignore
import cx from 'classnames';
import IconButton from './IconButton';
import LinkNewTab from './LinkNewTab';

import './CopyrightInfo.scss';

interface IProps{

}

interface IState{
    showInfo: boolean
}

class CopyrightInfo extends React.Component<any, any> {

    state = {
        showInfo: false,
    }

    // @ts-ignore
    toggleShowInfo = () => this.setState({
        showInfo: !this.state.showInfo,
    })

    render() {
        const { showInfo } = this.state

        const {
            className,
            id,
            issueDate,
            originalOwner,
            currentOwner,
            // @ts-ignore
        }:any = this.props

        return (
            <div className={cx('CopyrightInfo', className)}>
                <IconButton
                    className="CopyrightInfo__button"
                    icon="icon-copyright.png"
                    alt="Show copyright info"
                    onClick={this.toggleShowInfo}
                />
                {showInfo && (
                    <InfoTooltip
                        id={id}
                        issueDate={issueDate}
                        originalOwner={originalOwner}
                        currentOwner={currentOwner}
                    />
                )}
            </div>
        )
    }
}


const InfoTooltip = ({
                         id,
                         issueDate,
                         originalOwner,
                         currentOwner,
                     }:any) => (
    <div className="CopyrightInfo__info">
        <header className="CopyrightInfo__header">
            <h5 className="CopyrightInfo__id">Copyright.{id}</h5>
            <span className="CopyrightInfo__registerDate">{issueDate}</span>
        </header>
        <p className="CopyrightInfo__owner">
            Original Owner
            <LinkNewTab
                className="CopyrightInfo__ownerLink"
                link={`https://baobab.scope.klaytn.com/transactions?account=${originalOwner}`}
                title={originalOwner}
            />
        </p>
        <p className="CopyrightInfo__owner">
            Current Owner
            <LinkNewTab
                className="CopyrightInfo__ownerLink"
                link={`https://baobab.scope.klaytn.com/transactions?account=${currentOwner}`}
                title={currentOwner}
            />
        </p>
    </div>
)

export default CopyrightInfo
