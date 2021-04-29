import React, { Component } from "react";
import API from "../../utils/API";
import Employee from "../Employee";
import Search from "../Search";
import './style.css';

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
        .then(res => {

        console.log(res);
        this.setState({ result: res.data.results })

        })
        .catch(err => console.log(err))
    }


    handleChange = event => {
        event.preventDefault()
        this.setState({search: event.target.value});
    }

    handleSort = (event, type) => {
        if (type === "asc") {
            let ascending = this.state.result.sort((a, b) => {
                if (a.name.last < b.name.last) {
                    return -1
                }
                else {
                    return 1
                }
            })
            this.setState({ result: ascending })
        }
        else if (type === "dsc") {
            let descending = this.state.result.sort((a, b) => {
                if (a.name.last > b.name.last) {
                    return -1
                }
                else {
                    return 1
                }
            })
            this.setState({ result: descending })
        }

        
    }

    // render as a table
    render() {
        return (
            <div>
                <Search search={this.state.search} handleChange={this.handleChange}/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col" className="name">Name
                                <span className="dropdown">
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#" onClick={ (event) => this.handleSort(event, "asc")}>Ascending</a>
                                     <a className="dropdown-item" href="#" onClick={ (event) => this.handleSort(event, "dsc")}>Descending</a>
                                    </div>
                                </span>
                            </th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                        <Employee
                            result={this.state.result}
                            search={this.state.search}
                        />
                </table>
            </div>
        )
    }
}

export default EmployeeContainer;