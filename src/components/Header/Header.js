
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import Logo1 from '../../Image/logo.png'
import Logoimg from '../Logo/Logoimg';
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <Navbar bg="dark" variant="dark" expand="lg" className="py-3" >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Logoimg Logo={Logo1} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/blog" className="nav-link">Blog</NavLink>
                            <NavLink to="/longin" className="nav-link">longin</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
