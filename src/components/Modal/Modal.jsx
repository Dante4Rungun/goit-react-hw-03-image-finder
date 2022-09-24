import React, { Component } from "react";
import styled from './Modal.module.css'
import PropTypes from 'prop-types'

export class Modal extends Component {

    render() {
        return (
            <div className={styled.backdrop} onClick={this.props.onBackdropExit} data-backdrop>
                <div className={styled.modal} >
                    <img src={this.props.src} alt="" className={styled.modal__img} />
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onBackdropExit: PropTypes.func,
    src: PropTypes.string
}