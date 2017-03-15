// @flow
import React from 'react';
import './Header.css';
import { Carousel } from 'react-bootstrap';
import image1 from './image-1.jpg';
import image2 from './image-2.jpg';
import image3 from './image-3.jpg';
import image4 from './image-4.jpg';

const Header = (
    props: Object,
    state: Object
) => (
    <header>
        <Carousel className="header-carousel">
            <Carousel.Item>
                <div className="header-image">
                    <img src={image1} alt="" role="presentation"/>
                </div>

                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="header-image">
                    <img src={image2} alt="" role="presentation"/>
                </div>

                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="header-image">
                    <img src={image3} alt="" role="presentation"/>
                </div>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="header-image">
                    <img src={image4} alt="" role="presentation"/>
                </div>
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </header>
);


export default Header;