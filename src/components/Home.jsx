import React from 'react';
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import CarouselThreeSlides from "./Carousel";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <CarouselThreeSlides />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default Home;