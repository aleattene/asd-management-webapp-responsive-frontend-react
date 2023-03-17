import React from 'react';
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import CarouselThreeSlides from "./Carousel";
import Footer from "./Footer";

const Home = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className="container">
                <Navbar/>
                <CarouselThreeSlides/>
                <LoginForm/>
                <Footer/>
            </div>
            <style>
                {`
            .container {
              max-width: 70%;
              margin: 0 auto;
            }

            @media screen and (max-width: 992px) {
              .container {
                max-width: 85%;
              }
            }
            @media screen and (max-width: 768px) {
              .container {
                max-width: 100%;
              }
            }
          `}
            </style>
        </div>
    );
}

export default Home;