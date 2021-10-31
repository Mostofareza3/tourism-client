import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className="m-5">
            <h1 className="heading"> More beautiful place in the world <br /> You should visit</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1629465133452-bbbbbbdf50cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=993&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="highlight">Indonesia</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1592847712299-6919b9e45baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="highlight">Swizerland</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1603285487843-7b133fd9f015?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="highlight">Vhutan</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Testimonial;