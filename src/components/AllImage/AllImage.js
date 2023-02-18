import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleImage from './SingleImage';

const AllImage = () => {

    const [images, setImage] = useState([]);
    useEffect(() => {
        fetch("Galleries.json")
            .then((res) => res.json())
            .then((data) => setImage(data));
    }, []);

    return (
        <div className="all-images">
            <Container>
                <Row>
                    {images.map((hosen) => (<SingleImage key={hosen.id} ali={hosen}></SingleImage>))}
                </Row>
            </Container>
        </div>
    )
}

export default AllImage
