import Carousel from 'react-bootstrap/Carousel';

function CarouselThreeSlides() {
    return (
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="bolt_1920_910.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="rossi_1920_910.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="federer_1920_910.jpg"
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