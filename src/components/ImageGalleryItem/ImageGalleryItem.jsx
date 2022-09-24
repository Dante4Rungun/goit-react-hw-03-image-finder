import React, { Component } from "react";
import styled from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'
export class ImageGalleryItem extends Component {

    render() {   
        return (
            <li key={this.props.id} className={styled.ImageGalleryItem}>
                <img className={styled.ImageGalleryItem_image} src={this.props.src} alt={this.props.alt} data-large={this.props.srcLarge} onClick={this.props.openModal}/>    
            </li> 
        )
    }
}

ImageGalleryItem.propTypes = {
    id: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    srcLarge: PropTypes.string,
    openModal: PropTypes.func
}