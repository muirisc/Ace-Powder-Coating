import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import Prices from "./Components/Prices";
import NavBar from "./Components/NavBar";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/prices" element={<Prices/>} />
       <Route path="/faq" element={<FAQ/>} />
       <Route path="/gallery" element={<Prices/>} />
       <Route path="/colors" element={<Prices/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="" element={<Gallery/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
