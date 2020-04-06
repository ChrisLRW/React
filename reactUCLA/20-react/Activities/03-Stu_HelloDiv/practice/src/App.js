import React from "react";
import NavBar from "./components/NavBar"
import Jumbotron from "./components/Jumbotron"
import Card from "./components/Card"

function App() {
  return (
    <div className="container">
        <NavBar />
        <Jumbotron />
        <Card />      
    </div>
  );
}

export default App;
