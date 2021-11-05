import React from 'react';
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Link to='/sign-up'>
                                <Button className='mb-3' variant='primary' >Sign Up</Button>
                            </Link>
                            <Link to='/sign-in'>
                                <Button variant='success'  >Sign In</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Main;