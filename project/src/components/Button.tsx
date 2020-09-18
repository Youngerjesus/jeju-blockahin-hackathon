import React from 'react'
// @ts-ignore
import cx from 'classnames'

import './Button.scss'

const Button = ({
                    className,
                    title,
                    onClick,
                    icon,
                    disabled,
                }:any) => {
    const iconStyle = {
        paddingLeft: '18px',
        background: `left / 12px no-repeat url('/images/${icon}')`,
    }

    return (
        <button
            className={cx('Button', className)}
            onClick={onClick}
            disabled={disabled}
        >
      <span style={icon && iconStyle}>
        {title}
      </span>
        </button>
    )
}


export default Button
