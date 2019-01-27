import React, {Component} from 'react'
import "../SearchBar.css"

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="search-bar">
                <div className="search-bar-item search-bar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="32" height="32" stroke="none"><title>zoom</title><g class="nc-icon-wrapper" stroke-width="3" fill="#111111"><path fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.5 1.5a6 6 0 1 1 0 12 6 6 0 1 1 0-12z"/><path fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M0.5 15.5l3.76-3.76"/></g></svg>
                </div>
                <div className="search-bar-item search-bar-text">
                    search your reward here
                </div>
            </div>
        );
    }
}
