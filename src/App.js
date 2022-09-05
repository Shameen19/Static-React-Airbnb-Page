import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Card from "./Component/Card";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
