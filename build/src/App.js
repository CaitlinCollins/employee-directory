import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import EmployeeContainer from "./components/EmployeeContainer";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Search />
            <EmployeeContainer />
        </div>
    );
}

export default App;