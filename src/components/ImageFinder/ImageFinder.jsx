import React, { Component } from "react";
import styled from './ImageFinder.module.css'
import api from "services/api";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";
import { Error } from "components/Error/Error";
import { Modal } from "components/Modal/Modal";
import { RotatingLines } from 'react-loader-spinner'

export class ImageFinder extends Component {
    state = {
        images: [],
        isLoading: false,
        error: null,
        page: 1,
        query: '',
        modalVisible: false,
        modalSrc: ''
    }

    async componentDidMount() {
        this.setState({ isLoading: true });

        try {
        const images = await api.fetchImagesWithQuery('',this.state.page);
        this.setState(state => ({
            images: images
        }));
        } catch (error) {
        this.setState({ error });
        } finally {
        this.setState({ isLoading: false });
        }
    }

    search = async (query, source) => {
        this.setState({ isLoading: true });
        this.setState({ query: query, page: 1})
        try {
        const images = await api.fetchImagesWithQuery(query,this.state.page);
        this.setState(state => ({
            images: images
        }));
        } catch (error) {
        this.setState({ error });
        } finally {
        this.setState({ isLoading: false });
        }
    }

    nextPage = async () => {
        this.setState({ page: this.state.page + 1})
        try {
        const images = await api.fetchImagesWithQuery(this.state.query,this.state.page + 1);
        this.setState(state => ({
            images: images
        }));
        } catch (error) {
        this.setState({ error });
        } finally {
        this.setState({ isLoading: false });
        }    
    }

    onBackdropExit = (event) => {
        if (event.target.getAttribute('data-backdrop') != null) {
            this.setState(state => ({
                modalVisible: false
            }))
        }
    }

    onEsc = (event) => {
        if (event.key === "Escape") {
            this.setState(state => ({
                modalVisible: false
            }))           
        }
    }

    getSrcModal = (event) => {
        this.setState(state => ({
            modalSrc: event.target.getAttribute('data-large'),
            modalVisible: true
        }))
    }

    render() { 
        const { images, isLoading, error, modalVisible, modalSrc } = this.state

        return (
            <div className={styled.imageFinder} onKeyDown={this.onEsc} tabIndex="0">
                <Searchbar search={this.search} />
                {error && <Error error={error} />}
                {isLoading === true ?
                    <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                    /> : <ImageGallery images={images} openModal={this.getSrcModal} />}
                <Button textContent="Load more" nextPage={this.nextPage} />
                {modalVisible && <Modal src={modalSrc} onBackdropExit={this.onBackdropExit}/>}               
            </div>     
        )
    }
}