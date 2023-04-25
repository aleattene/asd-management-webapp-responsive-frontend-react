import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import boltCarousel from '../../../assets/img/home/bolt_1920_910.jpg'
import rossiCarousel from '../../../assets/img/home/rossi_1920_910.jpg'
import federerCarousel from '../../../assets/img/home/federer_1920_910.jpg'

function CarouselThreeSlides() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
         <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={boltCarousel}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={rossiCarousel}
                    alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={federerCarousel}
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