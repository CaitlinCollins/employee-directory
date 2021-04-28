import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
// import SearchForm from "./SearchForm";
// import MovieDetail from "./MovieDetail";
import API from "../../utils/API";


class EmployeeContainer extends Component {
    state = {
        result: [],
        search: "",
        order: "",
    };

    // When the component mounts, load all of the employees
    componentDidMount() {
        this.loadEmployees();
    }

    // Load all employees
    loadEmployees = () => {
        API.get()
        .then(res => this.setState({ result: res.data.results }))
        .catch(err => console.log(err))
    }

    // toggle ascending/descending
    handleSubmit = event => {
        event.preventDefault()
        // more code here...
    }

    // render as a table
    render() {
        return 
    }
}