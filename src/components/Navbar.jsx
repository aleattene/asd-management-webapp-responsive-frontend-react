import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownServices from "./dropdowns/Servizi";
import Logo from "./Logo";
import DropdownDocs from "./dropdowns/Documentazione";
import DropdownAnagrafiche from "./dropdowns/Anagrafiche";
import DropdownBandi from "./dropdowns/Bandi";
import DropdownUser from "./dropdowns/Utente";

const NavBar = () => {
    return (
        <div>
            {// [false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
            [false].map((expand) => (
                <Navbar bg="dark" variant="dark" expand="xxl" className="mb-1 text-light">
                    <Container fluid>

                        <Navbar.Brand href="#">
                            <Logo />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav>
                                <DropdownServices />
                                <DropdownDocs />
                                <DropdownAnagrafiche />
                                <DropdownBandi />
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                            <Nav>
                                <DropdownUser />
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            ))}
        </div>
    );
};

export default NavBar;


