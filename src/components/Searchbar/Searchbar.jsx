import React, { Component } from "react";
import styled from "./Searchbar.module.css"
import { AiOutlineSearch } from "react-icons/ai";
import debounce from 'lodash.debounce';

export class Searchbar extends Component {
    state = {
        search:''
    }    

    inputOnChange = debounce((event) => {
        this.setState(state => ({
            search: event.target.value
        }))
    }, 300)
    
    onSubmitQuery = event => {
        event.preventDefault()
        this.props.search(this.state.search.trim().replace('  ',' '),'searchbar')
    }

    render() {
        return (
            <header className={styled.searchbar}>
                <form className={styled.searchForm} onChange={this.inputOnChange} onSubmit={this.onSubmitQuery}>
                    <button type="submit">
                        <AiOutlineSearch className="submit__icon"/>
                    </button>
                    <input
                        className={styled.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}