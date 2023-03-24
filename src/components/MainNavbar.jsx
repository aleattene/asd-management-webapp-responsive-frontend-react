import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownServices from "./dropdowns/Products";
import Logo from "./Logo";
import DropdownDocs from "./dropdowns/Documentazione";
import DropdownAnagrafiche from "./dropdowns/Anagrafiche";
import DropdownBandi from "./dropdowns/Bandi";
import DropdownUser from "./dropdowns/Utente";

const MainNavbar = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <Navbar bg="dark" variant="dark" expand="xxl" className="mb-1">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <Logo />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                            <Nav>
                                <DropdownServices />
                                <DropdownDocs />
                                <DropdownAnagrafiche />
                                <DropdownBandi />
                                <DropdownUser />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default MainNavbar;


