import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        //Navbar with each of the links

        <Navbar bg="dark" variant="dark">
            <Container className="container">
                <Navbar.Brand to="#home">CodeHero</Navbar.Brand>
                <Nav className="justify-content-end">
                    <NavLink className="text" to="/home">Home</NavLink>
                    <NavLink className="text" to="/about">About</NavLink>
                    <NavLink className="text" to="/service">Courses</NavLink>
                    <NavLink className="text" to="/contact">Contact Us</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;