import React, { Component } from "react";
import styled from './ImageGallery.module.css'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {

    render() { 
        return (
            <ul className={styled.ImageGallery}>
                {this.props.images.map(image => (
                    <ImageGalleryItem id={image.id} src={image.webformatURL} srcLarge={image.largeImageURL} alt="photo" openModal={this.props.openModal} />
                ))}
           </ul> 
        )
    }
}


/*                {images.map(image => (
                    <ImageGalleryItem src={image.webformatURL} alt="photo" />
                ))} */