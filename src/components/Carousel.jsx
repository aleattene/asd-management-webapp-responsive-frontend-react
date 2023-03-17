import Carousel from 'react-bootstrap/Carousel';
import React from "react";

function CarouselThreeSlides() {
    return (
        <div className="carousel">
        <Carousel style={{ maxWidth: '200vh', margin: '0 auto' }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/bolt_1920_910.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/rossi_1920_910.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/federer_1920_910.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default CarouselThreeSlides;