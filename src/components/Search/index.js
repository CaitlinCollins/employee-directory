import React from "react";
import './style.css';

function Search(props) {
    return (
        
        <div className="search">
            <form className="form-inline">
                <input className="form-control" type="search" aria-label="Search" placeholder="Type Last Name Here!" value={props.search} onChange={(event) => props.handleChange(event)}>
                </input>
            </form>
        </div>
    );
}

export default Search;