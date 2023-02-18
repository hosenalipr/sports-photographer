import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import SectionHeading from '../../SectionHeading/SectionHeading'
import BlogTextService from './BlogTextService'

const BlogText = () => {

    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        fetch("Blogs.json")
            .then((res) => res.json())
            .then((data) => setBlog(data));
    }, []);

    return (
        <div className='blog-text'>
            <SectionHeading heading3="Questions Answer" />
            <Container>
                <Row>
                    {
                        blogs.map((item) => (<BlogTextService key={item.id} text={item} />))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default BlogText
