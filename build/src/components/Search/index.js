import React from "react";
import './Search.css';

function Search() {
    return (
        <div className="search">
            <form className="form-inline">
                <input className="form-control" type="search" aria-label="Search"></input>
                <button className="btn btn-outline-primary"type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;