import React, { Component } from "react";
import styled from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {

    render() {   
        return (
            <li key={this.props.id} className={styled.ImageGalleryItem}>
                <img className={styled.ImageGalleryItem_image} src={this.props.src} alt={this.props.alt} data-large={this.props.srcLarge} onClick={this.props.openModal}/>    
            </li> 
        )
    }
}