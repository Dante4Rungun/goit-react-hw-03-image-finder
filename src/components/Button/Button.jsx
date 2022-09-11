import React, { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from './Button.module.css'


export class Button extends Component {

    render() {       
        return (
            <button className={styled.button} onClick={this.props.nextPage}>{this.props.textContent}</button>
        )
    }
}