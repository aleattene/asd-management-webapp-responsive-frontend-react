import {NavDropdown} from "react-bootstrap";
import React from "react";

const DropdownServices = () => {
    return (
        <NavDropdown title="Gestione Servizi" id="services-dropdown">
        <NavDropdown.Item href="#">Inserisci Servizio</NavDropdown.Item>
        <NavDropdown.Item href="#">Visualizza Servizi Erogati</NavDropdown.Item>
        </NavDropdown>
    );
};

export default DropdownServices;