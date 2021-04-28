import React, { useState } from "react";


function Employee(props) {
return (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image}/>
            <div className="content">
                <div>{props.name}</div>
                <div>{props.phone}</div>
                <div>{props.email}</div>
                <div>{props.dob}</div>
            </div>
        </div>
    </div>
)

}

export default Employee;