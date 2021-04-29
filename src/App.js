import React from "react";
import Header from "./components/Header";
import EmployeeContainer from "./components/EmployeeContainer";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Header />
            <EmployeeContainer />
        </div>
    );
}

export default App;