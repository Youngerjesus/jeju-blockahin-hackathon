import React from 'react'

// @ts-ignore
import cx from 'classnames'

import './IconButton.scss';

const IconButton = ({
                        className,
                        icon,
                        alt,
                        onClick,
                    }:any) => (
    <button
        className={cx('IconButton', className)}
        onClick={onClick}
    >
        <img src={require(`../assets/images/${icon}`)} alt={alt} />
    </button>
)

export default IconButton
