import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import './BlogTextService.css'

const BlogTextService = ({ text }) => {
    return (
        <Col lg={4}>
            <div className="blogTextArea">
                <h3>{text.heading}</h3>
                <p>{text.description}</p>
            </div>
        </Col>
    )
}

export default BlogTextService
