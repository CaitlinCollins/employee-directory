import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Employee from "./components/Employee";

function App() {
    return (
        <div className="container">
            <Header />
            <Search />
            <Employee />
        </div>
    )
}

export default App;