import React from 'react'
import AllImage from '../AllImage/AllImage';
import SectionHeading from '../SectionHeading/SectionHeading';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className="gallery-area">
            <SectionHeading heading3={"Some Moments"} />
            <AllImage />
        </section>
    )
}

export default Gallery
