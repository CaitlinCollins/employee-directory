import React, { useState } from "react";


function Employee(props) {
return (
    <div>
        {props.result.map(results => (
        <tr>
            <th scope="row">{results.picture.thumbnail}</th>
            <th scope="row">{results.name.first} {results.name.last}</th>
            <th scope="row">{results.phone}</th>
            <th scope="row">{results.email}</th>
            <th scope="row">{results.dob}</th> 
        </tr>
        ))}
    </div>
    )
}

export default Employee;