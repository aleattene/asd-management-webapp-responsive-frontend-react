import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownServices from "../../dropdowns/ProductsComponent.jsx";
import Logo from "../Logo/Logo.jsx";
import DropdownDocs from "../../dropdowns/DocumentationsComponent.jsx";
import DropdownAnagrafiche from "../../dropdowns/CustomersComponent.jsx";
import DropdownBandi from "../../dropdowns/BandiComponent.jsx";
import DropdownUser from "../../dropdowns/UsersComponent.jsx";

const StaffNavbar = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <Navbar bg="dark" variant="dark" expand="false" className="mb-1">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <Logo />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                            <Nav>
                                <DropdownServices className="mx-2" />
                                <DropdownDocs className="mx-2" />
                                <DropdownAnagrafiche className="mx-2" />
                                <DropdownBandi className="mx-2" />
                                <DropdownUser className="mx-2" />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default StaffNavbar;


