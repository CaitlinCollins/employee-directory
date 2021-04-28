import React, { useState } from "react";


function Employee(props) {
return (
    <tbody>
        {props.result.map(results => (
        <tr key={results.login.uuid}>
            <td><img alt="thumbnail" src={results.picture.thumbnail}/></td>
            <td>{results.name.first} {results.name.last}</td>
            <td>{results.phone}</td>
            <td>{results.email}</td>
            <td>{results.dob.date}</td> 
        </tr>
        ))}
    </tbody>
    )
}

export default Employee;