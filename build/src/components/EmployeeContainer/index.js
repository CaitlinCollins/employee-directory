import React, { Component } from "react";
import API from "../../utils/API";
import Employee from "../Employee";


class EmployeeContainer extends Component {
    state = {
        result: [],
        search: "",
    };

    // When the component mounts, load all of the employees
    componentDidMount() {
        this.loadEmployees();
    }

    // Load all employees
    loadEmployees = () => {
        API.employees()
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
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{this.state.image}</th>
                            <th scope="row">{this.state.name}</th>
                            <th scope="row">{this.state.phone}</th>
                            <th scope="row">{this.state.email}</th>
                            <th scope="row">{this.state.dob}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeContainer;