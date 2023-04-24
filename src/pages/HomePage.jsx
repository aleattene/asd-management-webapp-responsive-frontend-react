import React from 'react';
import CarouselThreeSlides from "../components/Carousel.jsx";
import Container from "react-bootstrap/Container";
import HomeNavbar from "../components/HomeNavbar.jsx";

const HomePage = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <HomeNavbar/>
            <Container fluid>
                    <CarouselThreeSlides/>
                    {/*<LoginForm/>*/}
            </Container>
        </div>
    );
}

export default HomePage;