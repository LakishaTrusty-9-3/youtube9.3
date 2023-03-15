import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
      </div>
      </Router>
    </div>
  );
}
export default App;
