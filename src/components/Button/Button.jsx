import React, { Component } from "react";
import styled from './Button.module.css'
import PropTypes from 'prop-types';

export class Button extends Component {

    render() {       
        return (
            <button className={styled.button} onClick={this.props.nextPage}>{this.props.textContent}</button>
        )
    }
}

Button.propTypes = {
    nextPage: PropTypes.func,
    textContent: PropTypes.string
}
