
import React from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "./Display";


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Display/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        </Routes>
        
    </div>
    </BrowserRouter>
  )
}

export default App
