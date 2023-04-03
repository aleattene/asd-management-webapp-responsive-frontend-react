import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./Logo";
import {NavLink} from "react-router-dom";

const HomeNavbar = () => {
    return (
        <div style={{display: 'flex',
            flexDirection: 'column'}}>
            <Container fluid>
                <Navbar bg="dark" variant="dark" expand="false" className="mb-1">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <Logo />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                            <Nav>
                                <NavLink to="/staff" className="nav-link mx-2">
                                    Accesso Staff
                                </NavLink>
                                <NavLink to="/admin" className="nav-link mx-2">
                                    Accesso Admin
                                </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default HomeNavbar;


