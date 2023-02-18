import React from 'react'
import Col from 'react-bootstrap/Col';

function SingleImage({ ali }) {
    return (
        <Col lg={3}>
            <img src={ali.img} alt="" className="w-100 mb-4" />
        </Col>
    )
}

export default SingleImage
