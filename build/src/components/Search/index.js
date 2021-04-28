import React from "react";
import './style.css';

function Search(props) {
    return (
        <div className="search">
            <form className="form-inline">
                <input className="form-control" type="search" aria-label="Search" value={props.search} onChange={(event) => props.handleChange(event)}></input>
                <button className="btn btn-outline-primary"type="submit" onClick={(event) => props.handleSubmit(event)}>Search</button>
            </form>
        </div>
    );
}

export default Search;