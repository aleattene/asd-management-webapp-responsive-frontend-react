import {NavDropdown} from "react-bootstrap";
import React from "react";

const DropdownServices = () => {
    return (
        <NavDropdown title="Gestione Prodotti" id="services-dropdown" className="mx-auto">
            <NavDropdown.Item href="#">Inserisci Prodotto</NavDropdown.Item>
            <NavDropdown.Item href="/products">Visualizza Prodotti</NavDropdown.Item>
        </NavDropdown>
    );
};

export default DropdownServices;