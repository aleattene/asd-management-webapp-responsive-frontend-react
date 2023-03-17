import React from 'react';
import LoginForm from "../LoginForm";
import CarouselThreeSlides from "../Carousel";
import Container from "react-bootstrap/Container";

const Home = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                    <CarouselThreeSlides/>
                    <LoginForm/>
            </Container>
        </div>
    );
}

export default Home;