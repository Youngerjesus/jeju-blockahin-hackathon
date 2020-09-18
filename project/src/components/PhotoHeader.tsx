import React from 'react'
import LinkNewTab from './LinkNewTab';

import './PhotoHeader.scss'

const PhotoHeader = ({ currentOwner, location }:any) => (
    <header className="PhotoHeader">
        <LinkNewTab
            className="PhotoHeader__owner"
            link={`https://baobab.scope.klaytn.com/transactions?account=${currentOwner}`}
            title={currentOwner}
        />
        <p className="PhotoHeader__location">{location}</p>
    </header>
)

export default PhotoHeader
