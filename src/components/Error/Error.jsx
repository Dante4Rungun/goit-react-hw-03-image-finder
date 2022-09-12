import { Component } from 'react';
import styled from './Error.module.css'
import PropTypes from 'prop-types';

export class Error extends Component {
    render() {
        return (
            <p className={styled.error}>{this.props.error}</p>
        )
    }
}

Error.propTypes = {
    error: PropTypes.string
}