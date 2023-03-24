import './App.css';
import Home from "./components/pages/Home";
import MainNavbar from "./components/MainNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import Products from "./components/pages/Products";

function App() {
  return (
      <div className="App">
          <div className="main-container">
              <MainNavbar />
              <BrowserRouter>
                  <Routes>
                      <Route exact path="/" element={<Home/>} />
                      <Route exact path="/products" element={<Products/>} />
                  </Routes>
              </BrowserRouter>
              <Footer/>
          </div>
          <style>
              {`
                .main-container {  
                  width: 70%;
                  margin: 0 auto;
                }
    
                @media screen and (max-width: 992px) {
                  .main-container {
                    min-width: 85%;
                  }
                }
                @media screen and (max-width: 768px) {
                  .main-container {
                    min-width: 100%;
                  }
                }
          `}
          </style>
      </div>
  );
}

export default App;
