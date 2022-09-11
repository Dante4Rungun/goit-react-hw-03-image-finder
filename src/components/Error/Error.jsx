import { Component } from 'react';
import styled from './Error.module.css'

export class Error extends Component {
    render() {
        return (
            <p className={styled.error}>{this.props.error}</p>
        )
    }
}