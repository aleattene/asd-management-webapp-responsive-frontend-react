import './App.css';
import HomePage from "./pages/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import HomeAdminPage from "./pages/admin/HomeAdminPage.jsx";
import StaffRoutes from "./routes/staff/StaffRoutes.jsx";

function App() {
  return (
      <div className="App">
          <div className="main-container">
                  <Routes>
                      <Route path="/" element={<HomePage/>} />
                      <Route path="/admin/*" element={<HomeAdminPage/>} />
                      <Route path="/staff/*" element={<StaffRoutes/>} />
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
