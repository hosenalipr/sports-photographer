import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'

const Banner = () => {
    const [banners, setBanner] = useState([]);
    useEffect(() => {
        fetch("Hero.json")
            .then(res => res.json())
            .then(data => setBanner(data))
    }, []);

    return (
        <div className='banner'>
            <Carousel>
                {banners.map((sliderImage) => (<Carousel.Item key={sliderImage.id}>
                    <img
                        className="d-block w-100"
                        src={sliderImage.img}
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3>{sliderImage.subheading}</h3>
                        <h1>{sliderImage.heading}</h1>
                        <p>{sliderImage.text}</p>
                        <button>{sliderImage.button}</button>
                    </Carousel.Caption>
                </Carousel.Item>))}
            </Carousel>
        </div >
    )
}

export default Banner