import React from 'react'
import Container from 'react-bootstrap/Container';
import Logo1 from '../../Image/logo.png'
import Logoimg from '../Logo/Logoimg'
import './Fooder.css'

const Fooder = () => {
    return (
        <div className="fooder-area">
            <Container>
                <Logoimg Logo={Logo1} />
                <p>© 2023 Spotographer, All Rights Reserved.</p>
            </Container>
        </div>
    )
}

export default Fooder