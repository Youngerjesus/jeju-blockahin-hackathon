import React from 'react'
import { connect } from 'react-redux'

import './Modal.scss'

const Modal = ({}) => (
    (
        <div className="Modal__wrapper">
            <div className="Modal">
                <h2 className="Modal__header">Header</h2>
                <div className="Modal__body">Content</div>
                <button className="Modal__close">Close modal</button>
            </div>
        </div>
    )
)


export default Modal
