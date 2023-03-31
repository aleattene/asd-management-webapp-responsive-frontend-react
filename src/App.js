import './App.css';
import Home from "./components/pages/Home";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import Products from "./components/pages/staff/Products";
import HomeAdmin from "./components/pages/admin/HomeAdmin";
import HomeStaff from "./components/pages/staff/HomeStaff";

function App() {
  return (
      <div className="App">
          <div className="main-container">
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/admin" element={<HomeAdmin/>} />
                      <Route path="/staff" element={<HomeStaff/>} />
                      <Route path="/products" element={<Products/>} />
                      {/* <Route path="*" element={<Home/>} /> */}
                  </Routes>
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
                  .main-container{
                    min-width: 100%;
                  }
                }
          `}
          </style>
      </div>
  );
}

export default App;
