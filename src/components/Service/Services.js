import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Service from '../Service/Service'
import SectionHeading from '../SectionHeading/SectionHeading';

const Services = () => {

    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return (
        <section className="service-area">
            <SectionHeading heading3="My Services" />
            <Container>
                <Row>
                    {
                        services.map((item) => (<Service key={item.id} item={item}></Service>))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Services

