import React from 'react'
// @ts-ignore
import cx from 'classnames'

const LinkNewTab = ({ className, link, title }:any) => {
    return (
        <a
            className={cx('Link', className)}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
        >
            {title}
        </a>
    )
}

export default LinkNewTab
