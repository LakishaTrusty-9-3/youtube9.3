import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Header from "./components/Header.js";
import View from "./components/View.js";
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/view/:id" element={<View/>} />
          </Routes>
      </div>
      </Router>
    </div>
  );
}
export default App;
